// Small pixel-art icons for the auth card. '#' is the main colour, 'o' the
// light fill and 'x' the alert colour; '.' is empty.

const ICONS = {
  chat: {
    main: "#6E77E6",
    rows: [".#######.", "#ooooooo#", "#o#o#o#o#", "#ooooooo#", ".#######.", "..##.....", ".#.......", "........."],
  },
  phone: {
    main: "#EE7A2E",
    rows: ["##.......", "###......", ".##......", ".##......", "..##.....", "...###.##", "....#####", ".....###."],
  },
  missed: {
    main: "#C41010",
    rows: ["##....x.x", "###....x.", ".##...x.x", ".##......", "..##.....", "...###.##", "....#####", ".....###."],
  },
  sun: {
    main: "#F2A33A",
    rows: ["....#....", ".#.....#.", "...###...", "..#ooo#..", "#.#ooo#.#", "..#ooo#..", "...###...", ".#.....#.", "....#...."],
  },
  briefcase: {
    main: "#B4500A",
    rows: ["...###...", "..#...#..", "#########", "#ooooooo#", "#ooo#ooo#", "#########", "#ooooooo#", "#ooooooo#", "#########"],
  },
  headset: {
    main: "#4A47E0",
    rows: ["..#####..", ".#.....#.", "#.......#", "#.......#", "##.....##", "##.....##", "##.....##", ".......#.", "....###.."],
  },
  news: {
    main: "#6E77E6",
    rows: ["#########", "#ooooooo#", "#o###ooo#", "#o###o#o#", "#ooooooo#", "#o#####o#", "#o#####o#", "#ooooooo#", "#########"],
  },
} as const;

export type PixelIconName = keyof typeof ICONS;

export function PixelIcon({ name, size = 40 }: { name: PixelIconName; size?: number }) {
  const icon = ICONS[name];
  const cols = 9;
  const rows = icon.rows.length;
  const colour = (ch: string) => (ch === "#" ? icon.main : ch === "o" ? "#FFE3B8" : ch === "x" ? "#C41010" : null);
  return (
    <svg
      width={size}
      height={size}
      viewBox={`-0.5 -0.5 ${cols + 1} ${Math.max(cols, rows) + 1}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {icon.rows.flatMap((row, y) =>
        row.split("").map((ch, x) => {
          const c = colour(ch);
          return c ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={c} /> : null;
        }),
      )}
    </svg>
  );
}
