import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n // eslint-disable-line import/no-named-as-default-member
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: {
      "en-US": ["en"],
      default: ["en"],
    },
    debug: false,
    backend: {
      allowMultiLoading: false,
      loadPath: process.env.I18N_LOADPATH,
    },
  });

export default i18n;
