import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBW7_o2TpVYXDewqocrfmVsbhXadlAK0es",
  authDomain: "ecommerce-ciro.firebaseapp.com",
  projectId: "ecommerce-ciro",
  storageBucket: "ecommerce-ciro.appspot.com",
  messagingSenderId: "639661221285",
  appId: "1:639661221285:web:4e62f110ccdb2e9b8c744c"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
