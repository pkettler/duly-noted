import i18next from 'i18next';
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import resources from './translations';
// Configure I18Next framework
i18next
  // https://github.com/i18next/i18next-browser-languageDetector
  // Sets initial language to load based on `lng` query string
  // with various fallbacks.
  .use(i18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // language to use if translations in user language are not available
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources,
  });
