import { useState, useEffect, useCallback } from 'react';
import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';

const i18n = new I18n();
interface UseTranslationResult {
  locale: string;
  isInitialized: boolean;
  changeLanguage: (newLocale: string) => void;
  translate: (key: string, options?: Record<string, unknown>) => string;
}

export const useTranslation = (
  translations: Record<string, unknown>
): UseTranslationResult => {
  const [locale, setLocale] = useState<string>(getInitialLocale());
  const [isInitialized, setIsInitialized] = useState(false);

  const changeLanguage = useCallback((newLocale: string) => {
    i18n.locale = newLocale;
    setLocale(newLocale);
  }, []);

  useEffect(() => {
    initializeTranslations(translations, locale, setIsInitialized);
  }, [locale, translations]);

  const translate = useCallback(
    (key: string, options?: Record<string, unknown>): string => {
      return i18n.t(key, options);
    },
    []
  );

  return { locale, isInitialized, changeLanguage, translate };
};

const getInitialLocale = (): string => {
  return Localization.locale.split('-')[0] || 'en';
};

const initializeTranslations = (
  translations: Record<string, unknown>,
  locale: string,
  setIsInitialized: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  try {
    i18n.translations = { ...i18n.translations, ...translations };
    i18n.enableFallback = true;
    i18n.locale = locale;

    setIsInitialized(true);
  } catch (error) {
    console.error(`Error al cargar las traducciones:`, error);
  }
};
