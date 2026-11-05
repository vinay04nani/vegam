import fs from "node:fs";
import path from "node:path";
import { withBase } from "./paths";

export type LegalDoc = { slug: string; file: string; title: string; summary: string };

/** Customer-facing drafts. Internal agreements (NDA, IP, incident response) stay in the repo. */
export const legalDocs: LegalDoc[] = [
  { slug: "privacy", file: "privacy-policy.md", title: "Privacy policy", summary: "How Vegam handles personal data." },
  { slug: "terms", file: "terms-of-service.md", title: "Terms of service", summary: "The terms for businesses that use Vegam." },
  { slug: "cookies", file: "cookie-policy.md", title: "Cookie policy", summary: "Cookies on the website and dashboard." },
  { slug: "refunds", file: "refund-and-cancellation-policy.md", title: "Refunds and cancellation", summary: "How to cancel and when fees are refunded." },
  { slug: "acceptable-use", file: "acceptable-use-policy.md", title: "Acceptable use", summary: "What Vegam may not be used for." },
  { slug: "subprocessors", file: "subprocessors.md", title: "Sub-processors", summary: "Companies that process data for Vegam." },
  { slug: "dpa", file: "data-processing-agreement.md", title: "Data processing agreement", summary: "Terms for processing your customers' data." },
];

const FILE_TO_SLUG = new Map(legalDocs.map((doc) => [doc.file, doc.slug]));

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(value: string) {
  return escapeHtml(value)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label: string, href: string) => {
      const file = href.split("/").pop() ?? href;
      const slug = FILE_TO_SLUG.get(file);
      const url = slug ? withBase(`/legal/${slug}/`) : href.startsWith("http") ? href : withBase("/legal/privacy/");
      const external = url.startsWith("http") ? ' rel="noreferrer"' : "";
      return `<a href="${url}"${external}>${label}</a>`;
    })
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[\s(])\*([^*]+)\*/g, "$1<em>$2</em>");
}

/** A small Markdown subset: the legal drafts use headings, lists, tables, quotes and links. */
export function renderMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let i = 0;
  const flushParagraph = (buf: string[]) => {
    if (buf.length) html.push(`<p>${inline(buf.join(" "))}</p>`);
    buf.length = 0;
  };
  const para: string[] = [];
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      flushParagraph(para);
      i++;
      continue;
    }
    if (/^---+$/.test(line.trim())) {
      flushParagraph(para);
      html.push("<hr />");
      i++;
      continue;
    }
    const heading = /^(#{1,4})\s+(.*)$/.exec(line);
    if (heading) {
      flushParagraph(para);
      const level = heading[1].length;
      html.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      i++;
      continue;
    }
    if (line.startsWith(">")) {
      flushParagraph(para);
      const quote: string[] = [];
      while (i < lines.length && lines[i].startsWith(">")) {
        quote.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      html.push(`<blockquote><p>${inline(quote.join(" "))}</p></blockquote>`);
      continue;
    }
    if (/^\|.+\|$/.test(line.trim()) && i + 1 < lines.length && /^\|?\s*-+/.test(lines[i + 1])) {
      flushParagraph(para);
      const cells = (row: string) =>
        row
          .trim()
          .replace(/^\|/, "")
          .replace(/\|$/, "")
          .split("|")
          .map((cell) => inline(cell.trim()));
      const head = cells(line);
      i += 2;
      const body: string[][] = [];
      while (i < lines.length && /^\|.+\|$/.test(lines[i].trim())) {
        body.push(cells(lines[i]));
        i++;
      }
      html.push(
        `<div class="overflow-x-auto"><table><thead><tr>${head.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${body
          .map((row) => `<tr>${row.map((c) => `<td>${c}</td>`).join("")}</tr>`)
          .join("")}</tbody></table></div>`,
      );
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      flushParagraph(para);
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ""));
        i++;
      }
      html.push(`<ul>${items.map((item) => `<li>${inline(item)}</li>`).join("")}</ul>`);
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      flushParagraph(para);
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      html.push(`<ol>${items.map((item) => `<li>${inline(item)}</li>`).join("")}</ol>`);
      continue;
    }
    para.push(line.trim());
    i++;
  }
  flushParagraph(para);
  return html.join("\n");
}

export function readLegal(slug: string) {
  const doc = legalDocs.find((item) => item.slug === slug);
  if (!doc) return null;
  const full = path.join(process.cwd(), "..", "docs", "legal", doc.file);
  const markdown = fs.readFileSync(full, "utf8");
  const withoutTitle = markdown.replace(/^#\s+.*\n+/, "");
  return { ...doc, html: renderMarkdown(withoutTitle) };
}
