import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import EnglishTranslations from "./en/translation.json";
import SpanishTranslations from "./es/translation.json";

const resources = {
  en: {
    translation: EnglishTranslations,
  },
  es: {
    translation: SpanishTranslations,
  },
};

i18n // eslint-disable-line import/no-named-as-default-member
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: {
      "en-US": ["en"],
      "es-US": ["es"],
      default: ["en"],
    },
    debug: false,
    backend: {
      allowMultiLoading: false,
      loadPath:
        process.env.NODE_ENV === "production" ? "/public/locales/{{lng}}/{{ns}}.json" : "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
