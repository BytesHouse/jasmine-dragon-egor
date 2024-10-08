import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["ro", "ru"],

  // Used when no locale matches
  defaultLocale: "ro",
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ro|ru)/:path*"],
};
