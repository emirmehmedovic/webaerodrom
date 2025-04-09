'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';
import { Locale, defaultLocale, getMessages } from '@/i18n'; // Adjust path if needed

interface LocaleContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    // Try to get locale from localStorage, fallback to default
    if (typeof window !== 'undefined') {
      const storedLocale = localStorage.getItem('locale');
      if (storedLocale && ['bs', 'en'].includes(storedLocale)) {
        return storedLocale as Locale;
      }
    }
    return defaultLocale;
  });
  const [messages, setMessages] = useState<AbstractIntlMessages | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Update localStorage when locale changes
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale);
      // Optionally update html lang attribute
      document.documentElement.lang = locale;
    }

    // Load messages for the current locale
    const loadMessages = async () => {
      setIsLoading(true);
      try {
        const loadedMessages = await getMessages(locale);
        setMessages(loadedMessages);
      } catch (error) {
        console.error("Failed to load messages:", error);
        // Handle error, maybe set default messages or show an error state
        setMessages({}); // Set empty messages or handle differently
      } finally {
        setIsLoading(false);
      }
    };

    loadMessages();
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  // Show loading state or render children with provider
  if (isLoading || !messages) {
    // You might want a better loading indicator
    return <div>Loading translations...</div>;
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
