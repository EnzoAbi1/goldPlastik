import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Initialize i18next
i18n
  .use(HttpApi) // Load translations via HTTP
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    supportedLngs: ['en', 'fr', 'de'], // Languages you support
    fallbackLng: 'en', // Default language if the detected language is not available
    debug: true, // Enable debug mode for development
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie', 'localStorage'], // Cache the language in cookies/localStorage
    },
  });

export default i18n;