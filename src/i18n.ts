import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import * as landingPageIT from "./translations/it/landingPage/landingPage-it.json";
import * as landingPageEN from "./translations/en/landingPage/landingPage-en.json";
import * as notFoundPageIT from "./translations/it/notFoundPage/notFoundPage-it.json";
import * as notFoundPageEN from "./translations/en/notFoundPage/notFoundPage-en.json";
import * as authPagesIT from "./translations/it/AuthScreen/AuthScreen-it.json";
import * as authPagesEN from "./translations/en/AuthScreen/AuthScreen-en.json";
import * as inputValidationIT from "./translations/it/InputValidation/inputValidation-it.json";
import * as inputValidationEN from "./translations/en/InputValidation/inputValidation-en.json";
import * as resetPasswordStepperIT from "./translations/it/PasswordReset/PasswordReset-it.json";
import * as resetPasswordStepperEN from "./translations/en/PasswordReset/PasswordReset-en.json";
import * as homeScreenIT from "./translations/it/HomeScreen/homeScreen-it.json";
import * as homeScreenEN from "./translations/en/HomeScreen/homeScreen-en.json";

const resources = {
  en: {
    landingPage: landingPageEN,
    notFoundPage: notFoundPageEN,
    authPages: authPagesEN,
    inputValidation: inputValidationEN,
    resetPassword: resetPasswordStepperEN,
    homeScreen: homeScreenEN,
  },
  it: {
    landingPage: landingPageIT,
    notFoundPage: notFoundPageIT,
    authPages: authPagesIT,
    inputValidation: inputValidationIT,
    resetPassword: resetPasswordStepperIT,
    homeScreen: homeScreenIT,
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
