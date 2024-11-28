import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

type useTranslationResult = {
  translate: Function;
};

type useTranslationParams = {
  en: { [key: string]: string };
  es: { [key: string]: string };
};

const defaultLanguageCode = 'en';

const getLocaleLanguageCode = (): string => {
  return getLocales()[0].languageCode || defaultLanguageCode;
};

export const useTranslations = (
  localTranslation: useTranslationParams
): useTranslationResult => {
  const i18n = new I18n(localTranslation);
  i18n.locale = getLocaleLanguageCode();
  return { translate: i18n.t };
};
