import {
  ArrowUpDown,
  ArrowUpRight,
  Bell,
  Briefcase,
  CalendarCheck,
  ChartColumn,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Clock,
  Columns3,
  Copy,
  CreditCard,
  Download,
  ExternalLink,
  Filter,
  Globe,
  Headset,
  House,
  Image,
  Inbox,
  Key,
  Link,
  Lock,
  LogOut,
  type LucideIcon,
  type LucideProps,
  Mail,
  Megaphone,
  Menu,
  MessageSquare,
  Mic,
  MoreHorizontal,
  Newspaper,
  Pencil,
  Phone,
  PhoneMissed,
  Pin,
  Play,
  Plus,
  RefreshCw,
  Search,
  Send,
  Settings,
  Shield,
  Sparkles,
  Star,
  StickyNote,
  Store,
  Sun,
  Table,
  Tag,
  Trash2,
  Upload,
  Users,
  Wallet,
  X,
} from "lucide-react";
import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "star"
  | "wallet"
  | "link"
  | "store"
  | "message"
  | "phone"
  | "missed"
  | "calendar"
  | "lead"
  | "sun"
  | "check"
  | "arrow"
  | "play"
  | "menu"
  | "close"
  | "linkedin"
  | "x"
  | "instagram"
  | "youtube"
  | "briefcase"
  | "headset"
  | "news"
  | "external"
  | "chevron-down"
  | "chevron-right"
  | "chevron-left"
  | "mail"
  | "home"
  | "inbox"
  | "users"
  | "chart"
  | "settings"
  | "globe"
  | "upload"
  | "copy"
  | "send"
  | "lock"
  | "sparkle"
  | "clock"
  | "megaphone"
  | "pin"
  | "pencil"
  | "plus"
  | "trash"
  | "search"
  | "filter"
  | "more"
  | "sort"
  | "note"
  | "table"
  | "board"
  | "bell"
  | "logout"
  | "card"
  | "key"
  | "shield"
  | "mic"
  | "image"
  | "tag"
  | "download"
  | "external-link"
  | "refresh";

const icons: Record<Exclude<IconName, "linkedin" | "x" | "instagram" | "youtube">, LucideIcon> = {
  message: MessageSquare,
  phone: Phone,
  missed: PhoneMissed,
  calendar: CalendarCheck,
  lead: ArrowUpRight,
  sun: Sun,
  check: CircleCheck,
  arrow: ArrowUpRight,
  play: Play,
  menu: Menu,
  close: X,
  briefcase: Briefcase,
  headset: Headset,
  news: Newspaper,
  external: ExternalLink,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  "chevron-left": ChevronLeft,
  mail: Mail,
  home: House,
  inbox: Inbox,
  users: Users,
  chart: ChartColumn,
  settings: Settings,
  globe: Globe,
  upload: Upload,
  copy: Copy,
  send: Send,
  lock: Lock,
  sparkle: Sparkles,
  clock: Clock,
  megaphone: Megaphone,
  pin: Pin,
  pencil: Pencil,
  plus: Plus,
  trash: Trash2,
  search: Search,
  filter: Filter,
  more: MoreHorizontal,
  sort: ArrowUpDown,
  note: StickyNote,
  table: Table,
  board: Columns3,
  bell: Bell,
  logout: LogOut,
  card: CreditCard,
  key: Key,
  shield: Shield,
  mic: Mic,
  image: Image,
  tag: Tag,
  download: Download,
  "external-link": ExternalLink,
  refresh: RefreshCw,
  star: Star,
  wallet: Wallet,
  link: Link,
  store: Store,
};

const FLIP = new Set<IconName>(["arrow", "lead", "chevron-right", "chevron-left", "external", "external-link", "logout"]);

function BrandGlyph({ name, size }: { name: "linkedin" | "x" | "instagram" | "youtube"; size: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  const paths: Record<typeof name, ReactNode> = {
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
      </>
    ),
    x: <path d="M5 5l14 14M19 5L5 19" />,
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5v.01" />
      </>
    ),
    youtube: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="M10 9l5 3-5 3z" />
      </>
    ),
  };
  return <svg {...common}>{paths[name]}</svg>;
}

type Props = Omit<LucideProps, "ref"> & { name: IconName; size?: number };

/** Lucide icons at a 1.75 stroke. Arrows flip for RTL. Channel marks stay custom. */
export function Icon({ name, size = 20, strokeWidth = 1.75, className = "", ...rest }: Props) {
  const flip = FLIP.has(name) ? "rtl:-scale-x-100" : "";
  const classes = `${flip} ${className}`.trim();
  if (name === "linkedin" || name === "x" || name === "instagram" || name === "youtube") {
    return <span className={classes}><BrandGlyph name={name} size={size} /></span>;
  }
  const Glyph = icons[name];
  return <Glyph size={size} strokeWidth={strokeWidth} aria-hidden className={classes} {...(rest as SVGProps<SVGSVGElement>)} />;
}
