import React from "react";
import "./App.css";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import Translate from "./components/translate";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t("welcome")}</h1>
        <p>{t("explore")}</p>
        <a
          className="App-link"
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("discover")}
        </a>
        <div className="language">
          <p>{t("choose")}</p>
        </div>
        <Suspense fallback="loading">
          <Translate />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
