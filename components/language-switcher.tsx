'use client';

import { useLocale } from '@/components/locale-provider';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  const handleSelect = (lang: 'bs' | 'en') => {
    setLocale(lang);
    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        aria-label="Change language"
      >
        <Globe className="h-5 w-5" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
          <button
            onClick={() => handleSelect('bs')}
            className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              locale === 'bs' ? 'font-semibold' : ''
            }`}
          >
            🇧🇦 Bos
          </button>
          <button
            onClick={() => handleSelect('en')}
            className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              locale === 'en' ? 'font-semibold' : ''
            }`}
          >
            🇬🇧 Eng
          </button>
        </div>
      )}
    </div>
  );
}
