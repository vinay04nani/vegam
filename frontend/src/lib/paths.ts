// The site can be served from a sub-path (GitHub Pages serves it at /vegam).
// NEXT_PUBLIC_BASE_PATH is set at build time; it is empty for Docker and local runs.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a site-absolute path ("/login/") with the base path. */
export const withBase = (path: string) => (path.startsWith("/") ? `${basePath}${path}` : path);
