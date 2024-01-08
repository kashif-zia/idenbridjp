import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import 'assets/css/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import common_jp from "./translations/jp/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'jp',
  resources: {
    en: {
      common: common_en
    },
    jp: {
      common: common_jp
    },
  },
});
Amplify.configure(awsExports)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18next}>
    <Router>
      <App />
    </Router>
  </I18nextProvider>
);

reportWebVitals();
