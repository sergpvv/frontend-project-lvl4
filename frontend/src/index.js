// @ts-check

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import init from './init.jsx';
import reportWebVitals from './reportWebVitals';
import './assets/application.scss';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const vdom = await init();
  root.render(<React.StrictMode>{vdom}</React.StrictMode>);
};

app();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
