import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
// import todoApp from './reducers/'
import TesteReducers from "./reducers/TESTEReducer";
import Root from "./components/Root";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-day-picker/lib/style.css";
import "react-dates/lib/css/_datepicker.css";

import ae from './Resources/Translations/Idiomaar-AE.json'
import de from './Resources/Translations/Idiomade-DE.json'
import en from './Resources/Translations/Idiomaen-US.json'
import es from './Resources/Translations/Idiomaes-ES.json'
import fr from './Resources/Translations/Idiomafr_FR.json'
import hi from './Resources/Translations/Idiomahi_IN.json'
import it from './Resources/Translations/Idiomait_IT.json'
import ja from './Resources/Translations/Idiomaja_JP.json'
import ko from './Resources/Translations/Idiomako_KR.json'
import pt from './Resources/Translations/Idiomapt-PT.json'
import ru from './Resources/Translations/Idiomaru_RU.json'
import zh from './Resources/Translations/Idiomazh-CN.json'



import {I18nextProvider} from 'react-i18next';
import i18n from "i18next";

const resources = {
  en: {
    translation: en
  },
  pt: {
    translation: pt
  },
  ae: {
    translation: ae
  },
  de: {
    translation: de
  },
  es: {
    translation: es
  },
  fr: {
    translation: fr
  },
  hi: {
    translation: hi
  },
  it: {
    translation: it
  },
  ja: {
    translation: ja
  },
  ko: {
    translation: ko
  },
  ru: {
    translation: ru
  },
  zh: {
    translation: zh
  }
};

localStorage.setItem('idioma', JSON.stringify(resources));

i18n.init({
  resources,
  lng: "en"
});

const store = createStore(TesteReducers);
render(
    <I18nextProvider i18n={i18n}>
        <Root store={store} />
    </I18nextProvider>,
    document.getElementById("root")
);
