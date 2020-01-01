import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
// import todoApp from './reducers/'
import TesteReducers from "./reducers/TESTEReducer";
import Root from "./components/Root";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-day-picker/lib/style.css";
import "react-dates/lib/css/_datepicker.css";

const store = createStore(TesteReducers);
render(
    <Root store={store} />, 
    document.getElementById("root")
);
