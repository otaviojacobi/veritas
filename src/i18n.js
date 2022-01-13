import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      resources:{
          en: {
              translations: {
                "Overview dashboard": "Overview dashboard",
              }
          },
          pt: {
              translations: {
                "Wallet": "Carteira",
                "My Wallets": "Minhas Carteiras",
                "New Orders": "Novas Ordens",
                "Goals": "Metas",
                "My Goals": "Minhas Metas",
                "Expends": "Gastos",
                "My Expends": "Meus Gastos",
                "Hello! let's get started": "Olá! Vamos começar",
                "SIGN IN": "ENTRAR",
                "Sign in to continue.": "Entre para continuar."
            }
          }
      },
      fallbackLng: "pt",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;