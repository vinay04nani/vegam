"""Convert a fragment of design-board HTML into JSX.

The boards are plain HTML with inline styles. This keeps them pixel-identical in React:
inline styles become style objects, board links become Next links, and form state
(checked, value) becomes its uncontrolled React equivalent.
"""
import json
import re
from html.parser import HTMLParser

VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'}
SKIP = {'script', 'style'}

TAGS = {t.lower(): t for t in [
    'linearGradient', 'radialGradient', 'clipPath', 'textPath', 'foreignObject', 'animateTransform', 'animateMotion',
    'feGaussianBlur', 'feTurbulence', 'feColorMatrix', 'feBlend', 'feComposite', 'feOffset', 'feMerge', 'feMergeNode',
    'feFlood', 'feDisplacementMap', 'feDropShadow', 'feMorphology', 'feComponentTransfer', 'feFuncA', 'feFuncR',
    'feFuncG', 'feFuncB', 'feImage', 'feTile', 'feSpecularLighting', 'feDiffuseLighting', 'feDistantLight', 'fePointLight']}

ATTRS = {a.lower(): a for a in [
    'viewBox', 'preserveAspectRatio', 'gradientUnits', 'gradientTransform', 'patternUnits', 'patternTransform',
    'patternContentUnits', 'stdDeviation', 'clipPathUnits', 'textLength', 'lengthAdjust', 'baseFrequency', 'numOctaves',
    'spreadMethod', 'markerWidth', 'markerHeight', 'refX', 'refY', 'startOffset', 'attributeName', 'attributeType',
    'repeatCount', 'keyTimes', 'keySplines', 'calcMode', 'xChannelSelector', 'yChannelSelector', 'maskUnits',
    'maskContentUnits', 'filterUnits', 'primitiveUnits', 'pathLength', 'tableValues', 'surfaceScale', 'diffuseConstant',
    'specularConstant', 'specularExponent', 'limitingConeAngle', 'pointsAtX', 'pointsAtY', 'pointsAtZ', 'targetX',
    'targetY', 'edgeMode', 'kernelMatrix', 'kernelUnitLength', 'preserveAlpha', 'stitchTiles', 'seed']}
ATTRS.update({
    'class': 'className', 'for': 'htmlFor', 'tabindex': 'tabIndex', 'readonly': 'readOnly', 'maxlength': 'maxLength',
    'minlength': 'minLength', 'colspan': 'colSpan', 'rowspan': 'rowSpan', 'autocomplete': 'autoComplete',
    'autofocus': 'autoFocus', 'inputmode': 'inputMode', 'enterkeyhint': 'enterKeyHint', 'srcset': 'srcSet',
    'crossorigin': 'crossOrigin', 'spellcheck': 'spellCheck', 'contenteditable': 'contentEditable',
    'xlink:href': 'xlinkHref', 'xmlns:xlink': 'xmlnsXlink', 'xml:space': 'xmlSpace', 'datetime': 'dateTime',
    'novalidate': 'noValidate', 'autocapitalize': 'autoCapitalize', 'playsinline': 'playsInline', 'autoplay': 'autoPlay',
    'cellpadding': 'cellPadding', 'cellspacing': 'cellSpacing', 'usemap': 'useMap', 'frameborder': 'frameBorder',
    'allowfullscreen': 'allowFullScreen', 'formaction': 'formAction', 'accesskey': 'accessKey'})
BOOL = {'disabled', 'required', 'hidden', 'multiple', 'open', 'readOnly', 'autoFocus', 'noValidate', 'controls', 'loop',
        'muted', 'playsInline', 'autoPlay', 'allowFullScreen', 'inert', 'reversed'}
NUMERIC = {'tabIndex', 'colSpan', 'rowSpan', 'maxLength', 'minLength', 'rows', 'cols', 'size', 'span'}


def camel(name):
    return re.sub(r'-([a-z0-9])', lambda m: m.group(1).upper(), name)


def split_decls(style):
    out, cur, depth, quote = [], '', 0, None
    for ch in style:
        if quote:
            cur += ch
            if ch == quote:
                quote = None
        elif ch in '"\'':
            quote = ch
            cur += ch
        elif ch == '(':
            depth += 1
            cur += ch
        elif ch == ')':
            depth -= 1
            cur += ch
        elif ch == ';' and depth == 0:
            out.append(cur)
            cur = ''
        else:
            cur += ch
    out.append(cur)
    return [d for d in out if d.strip()]


def fonts(value):
    value = re.sub(r"""['"]Inter Tight['"]""", 'var(--font-tight)', value)
    return re.sub(r'(?<![\w-])Inter(?=\s*,)', 'var(--font-inter)', value)


def style_obj(style):
    props = {}
    for decl in split_decls(style):
        if ':' not in decl:
            continue
        k, v = decl.split(':', 1)
        k, v = k.strip(), re.sub(r'\s*!important\s*$', '', v.strip())
        if k.startswith('--'):
            key = k
        elif k.startswith('-ms-'):
            key = camel(k[1:])
        elif k.startswith('-'):
            key = camel(k[1:])
            key = key[0].upper() + key[1:]
        else:
            key = camel(k)
        if k == 'font-family' or k == 'font':
            v = fonts(v)
        props.pop(key, None)
        props[key] = v
    custom = any(k.startswith('--') for k in props)
    body = ', '.join('%s: %s' % (json.dumps(k) if k.startswith('--') else k, json.dumps(v, ensure_ascii=False)) for k, v in props.items())
    return '{{ %s }%s}' % (body, ' as CSSProperties' if custom else '')


class Converter(HTMLParser):
    def __init__(self, links, style_keys, hooks=None):
        super().__init__(convert_charrefs=True)
        self.links, self.style_keys, self.hooks = links, style_keys, hooks or {}
        self.out, self.stack, self.skip = [], [], 0
        self.uses_link = self.uses_css = False
        self.used = set()
        self.textarea = None

    def ind(self):
        return '  ' * (len(self.stack) + 3)

    def attr_str(self, tag, attrs):
        parts, a = [], dict(attrs)
        style = a.get('style') or ''
        keys = [k for pat, k in self.style_keys if pat in style]
        for name, val in attrs:
            name = ATTRS.get(name, name)
            if name == 'style':
                if not style.strip():
                    continue
                s = style_obj(style)
                self.uses_css = self.uses_css or 'as CSSProperties' in s
                parts.append('style=' + s)
                continue
            if name.startswith('on'):
                continue
            if not (name.startswith('aria-') or name.startswith('data-')) and '-' in name:
                name = camel(name)
            if name == 'checked':
                parts.append('defaultChecked')
                continue
            if name == 'selected':
                continue
            if name == 'value' and tag in ('input', 'textarea', 'select'):
                name = 'defaultValue'
            if name == 'contentEditable':
                parts.append('contentEditable suppressContentEditableWarning')
                continue
            if val is None or (name in BOOL and val in ('', name.lower())):
                parts.append(name)
            elif name in NUMERIC and re.fullmatch(r'-?\d+', val):
                parts.append('%s={%s}' % (name, val))
            else:
                parts.append('%s=%s' % (name, json.dumps(val, ensure_ascii=False) if '"' not in val and '\\' not in val and '\n' not in val else '{%s}' % json.dumps(val, ensure_ascii=False)))
        if keys:
            parts.append('data-s="%s"' % ' '.join(keys))
        return (' ' + ' '.join(parts)) if parts else ''

    def open(self, tag, attrs, selfclose):
        if self.skip or tag in SKIP:
            if not selfclose:
                self.skip += 1
            return
        a = dict(attrs)
        name = TAGS.get(tag, tag)
        if tag == 'a':
            href = a.get('href') or ''
            route = href[1:] if href.startswith('@') else self.links.get(href)
            if route:
                attrs = [(k, route if k == 'href' else v) for k, v in attrs]
                a = dict(attrs)
                name = 'Link'
                self.uses_link = True
        hook = self.hooks.get(tag)
        if hook:
            swapped = hook(name, a)
            if swapped:
                name = swapped
                self.used.add(swapped)
        if tag == 'tr' and self.stack and self.stack[-1][1] == 'table':
            # Browsers add the missing <tbody>; React must render the same tree.
            self.out.append('%s<tbody>' % self.ind())
            self.stack.append(('tbody', 'tbody'))
        text = '%s<%s%s' % (self.ind(), name, self.attr_str(tag, attrs))
        if selfclose or tag in VOID:
            self.out.append(text + ' />')
        else:
            self.out.append(text + '>')
            self.stack.append((name, tag))
            if tag == 'textarea':
                self.textarea = len(self.out) - 1

    def handle_starttag(self, tag, attrs):
        self.open(tag, attrs, False)

    def handle_startendtag(self, tag, attrs):
        self.open(tag, attrs, True)

    def handle_endtag(self, tag):
        if self.skip:
            self.skip -= 1
            return
        if tag in SKIP or tag in VOID:
            return
        if not any(t == tag for _, t in self.stack):
            return
        while self.stack:
            top, t = self.stack.pop()
            self.out.append('%s</%s>' % (self.ind(), top))
            if t == tag:
                break
        self.textarea = None

    def handle_data(self, data):
        if self.skip or not data:
            return
        if self.textarea is not None:
            line = self.out[self.textarea]
            self.out[self.textarea] = line[:-1] + ' defaultValue=%s>' % ('{%s}' % json.dumps(data, ensure_ascii=False))
            return
        if not data.strip():
            if '\n' not in data and self.stack:
                self.out.append(self.ind() + '{" "}')
            return
        lead = ' ' if data[0].isspace() else ''
        trail = ' ' if data[-1].isspace() else ''
        text = lead + re.sub(r'\s+', ' ', data.strip()) + trail
        self.out.append(self.ind() + '{%s}' % json.dumps(text, ensure_ascii=False))


def convert(html, links=None, style_keys=(), hooks=None):
    c = Converter(links or {}, list(style_keys), hooks)
    c.feed(html)
    c.close()
    while c.stack:
        top, _ = c.stack.pop()
        c.out.append('%s</%s>' % (c.ind(), top))
    return '\n'.join(c.out), c
