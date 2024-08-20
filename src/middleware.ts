import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["ru", "kz", "en"],
  // Used when no locale matches
  defaultLocale: "kz",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ru|kz|en)/:path*"],
};
