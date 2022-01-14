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
                "Sign in to continue.": "Entre para continuar.",
                "Orders": "Ordens",
                "New Order": "Nova Ordem",
                "Stocks": "Ações",
                "Investiment Funds": "Fundos de Investimentos",
                "REITs": "Fundos Imobiliários",
                "Direct Treasure": "Tesouro Direto",
                "CDB, LCA, LCI, CRI, CRA": "CDB, LCA, LCI, CRI, CRA",
                "What product did you buy?": "Que produto você comprou?",
                "What product did you sell?": "Que produto você vendeu?",
                "Which operation did you do ?": "Qual operação realizou ?",
                "Buy": "Compra",
                "Sell": "Venda",
                "Buy Price (unit)": "Valor de Compra (unidade)",
                "Sell Price (unit)": "Valor de Venda (unidade)",
                "Buy Price (account)": "Valor de Compra (cota)",
                "Sell Price (account)": "Valor de Venda (cota)",
                "Amount of Stocks": "Quantidade de Ações",
                "Stock Ticker":"Papel negociado",
                "Fund Ticker": "Nome ou CNPJ do fundo",
                "REIT Ticker": "Nome do Fundo Imobiliário",
                "Direct Treasure Ticker": "Tipo do Tesouro Direto",
                "CDB, LCA, LCI, CRI, CRA Ticker": "Nome da aplicação em Renda Fixa",
                "Amounts of account": "Quantidade de cotas",
                "Amounts of stocks": "Quantidade de ações",
                "When did you buy it?": "Quando você comprou?",
                "In which broker?" : "Em qual corretora?",
                "What is the operational cost?": "Qual o custo operacional (corretagem e taxas)?",
                "Paper": "Papel",

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