import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import * as landingPageIT from "./translations/it/landingPage/landingPage-it.json"
import * as landingPageEN from "./translations/en/landingPage/landingPage-en.json"

const resources = {
  en: {
    landingPage: landingPageEN,
  },
  it: {
    landingPage: landingPageIT
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
