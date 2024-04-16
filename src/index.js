import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import frTranslation from "./translation/fr.json";
import enTranslation from "./translation/en.json";
import jpTranslation from "./translation/jp.json";
import inTranslation from "./translation/in.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
      jp: {
        translation: jpTranslation,
      },
      in: {
        translation: inTranslation,
      },
    },
    lng: "fr", // set initial language
    fallbackLng: "fr", // fallback language
    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
