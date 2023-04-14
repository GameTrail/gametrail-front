import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en_US from './languages/en_US';
import es_ES from './languages/es_ES';

const availableLanguages = { en_US, es_ES };

const languages = Object.entries(availableLanguages).reduce(
  // Map the languages to the format that the i18n library expects
  (acc, [key, value]) => ({
    ...acc,
    [key]: {
      translation: value,
    },
  }),
  {},
);

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'es_ES';
    resources: typeof languages;
  }
}

i18n.use(initReactI18next)
  .init({
    resources: languages,
    lng: 'es_ES',
    fallbackLng: 'es_ES',
    interpolation: { escapeValue: false },
  }).then((r) => r);

export default i18n;
