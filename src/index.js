import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';
// import * as firebase from "firebase";
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { initializeApp } from 'firebase/app';
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyADTaD0C48yL6DvzD4iIrevtzfoEWlA0kg",
  authDomain: "cart-bd02f.firebaseapp.com",
  projectId: "cart-bd02f",
  storageBucket: "cart-bd02f.appspot.com",
  messagingSenderId: "532581079544",
  appId: "1:532581079544:web:7ea6996deb6721d5b79e0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
