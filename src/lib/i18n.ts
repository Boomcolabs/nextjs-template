//@ts-nocheck

import i18n, { LanguageDetectorAsyncModule } from "i18next";
import { initReactI18next } from "react-i18next";
import { en, ko, zh } from "../translation";

const STORE_LANGUAGE_KEY = "settings.lang";

const languageDetectorPlugin: LanguageDetectorAsyncModule = {
  type: "languageDetector",
  async: true,
  init: () => {},
  async detect(
    callback: (lng: string | readonly string[] | undefined) => void | undefined
  ) {
    try {
      // get stored language from local storage
      if (typeof window === "undefined") {
        return callback("en");
      }
      const language = localStorage.getItem(STORE_LANGUAGE_KEY);
      if (language) {
        // if language was stored before, use this language in the app
        callback(language);
        return language;
      } else {
        // if language was not stored yet, use english
        callback("en");
        return "en";
      }
    } catch (error) {
      console.log("Error reading language", error);
      return undefined;
    }
  },
  async cacheUserLanguage(language: string) {
    try {
      // save a user's language choice in local storage
      localStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {}
  },
};
const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
  zh: {
    translation: zh,
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  //@ts-ignore
  .init({
    resources,
    compatibilityJSON: "v3",
    // fallback language is set to english
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
