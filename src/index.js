import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import { Provider } from "react-redux";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.baseURL =
  "https://evening-atoll-98146-c8adcfc9a19d.herokuapp.com/api/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
