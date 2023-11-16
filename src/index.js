import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import UseStateHook from './components/UseStateHook/UseStateHook';
import UseEffectHook from './components/UseEffect/UseWffectHook';
import UseRefHook from './components/UseRef/UseRefHook';
import UseContextHook from './components/UseContext/UseContextHook';
import UseCallbackHook from './components/UseCallback/UseCallbackHook';
import UseReducerHook from './components/UseReducer/UseReducerHook';
import UseReducerHook1 from './components/UseReducer/UseReducerHook1';
import Indexaxios from './components/axios/Indexaxios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseStateHook/> */}
    {/* <UseEffectHook/> */}
    {/* <UseRefHook /> */}
    {/* <UseContextHook/> */}
    {/* <UseCallbackHook /> */}
    {/* <UseReducerHook/> */}
    {/* <UseReducerHook1/> */}
    <Indexaxios/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
