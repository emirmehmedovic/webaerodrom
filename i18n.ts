// Define the locales you want to support
export const locales = ['bs', 'en'] as const; // Use 'as const' for stricter typing
export const defaultLocale = 'bs';

export type Locale = (typeof locales)[number];

// Function to get messages dynamically, useful for the client provider
export const getMessages = async (locale: Locale) => {
  try {
    // Dynamically import the messages for the requested locale
    return (await import(`./messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Could not load messages for locale: ${locale}`, error);
    // Fallback to default locale messages if specific locale fails or doesn't exist
    if (locale !== defaultLocale) {
      console.warn(`Falling back to default locale (${defaultLocale}) messages.`);
      return (await import(`./messages/${defaultLocale}.json`)).default;
    }
    // If even the default locale fails, throw an error or return empty object
    throw new Error(`Failed to load messages for locale ${locale} and default locale ${defaultLocale}.`);
    // return {};
  }
};

// Note: getRequestConfig is removed as we are handling locale client-side.
// If next-intl build requires it, a minimal placeholder might be needed,
// but typically it's for server-rendered translations based on request context.
