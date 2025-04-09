import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n'; // Import locales and defaultLocale

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale
});

export const config = {
  // Disable locale-based routing by not matching any paths
  matcher: []
};
