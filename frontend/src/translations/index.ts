import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import es from './es.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  //lng: getLocales()[0].languageCode,
  lng: 'es',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
});

export default i18n;
