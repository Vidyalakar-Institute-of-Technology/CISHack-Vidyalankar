import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChKSMpUlc0SDVbFwhi1xs6J1dlVUX9_uQ",
  authDomain: "medeasy-fcc18.firebaseapp.com",
  projectId: "medeasy-fcc18",
  storageBucket: "medeasy-fcc18.appspot.com",
  messagingSenderId: "1029889448413",
  appId: "1:1029889448413:web:67dac58949478bb5707e34",
  measurementId: "G-Z7J8DNT17T",
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
