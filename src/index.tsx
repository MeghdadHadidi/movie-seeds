import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Views from './views';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { createInitialState, reducer, StoreProvider } from "./store"

const initialState = createInitialState()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider reducer={reducer} initialState={initialState}>
        <Views />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
