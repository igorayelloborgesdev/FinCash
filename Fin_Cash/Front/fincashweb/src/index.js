import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
// import todoApp from './reducers/'
import TesteReducers from './reducers/TESTEReducer'
import Root from './components/Root'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-day-picker/lib/style.css';
import 'react-dates/lib/css/_datepicker.css';

import { Theme1 } from "./styles/css/Geral_v2";

const store = createStore(TesteReducers)
const state = store.getState();

console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
console.log(state.clickState.newValue1);


render(                
        <Root store={store} />, 
    document.getElementById('root')
)