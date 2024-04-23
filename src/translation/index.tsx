/**
 * Configuration for multi language support.
 */

import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import memoize from 'lodash/memoize';

import en from './resources/en.json';
import fr from './resources/fr.json';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  resources,
  interpolation: {
    escapeValue: false,
  },
});

// memoize is  used to catch the result of the function call.
export const translate = memoize(
  (key: any | string | string[], config?: any | string) => i18n.t(key, config),
  (key: string | string[], config?: any | string) =>
    config ? key + JSON.stringify(config) : key,
);

export default i18n;
