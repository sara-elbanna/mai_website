
import { ar } from './ar';
import { en } from './en';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};
i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
export default i18next;