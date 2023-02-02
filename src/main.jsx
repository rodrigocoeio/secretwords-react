import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Import Bootstrap
import "./assets/styles.scss";

import store from "./store";
import { Provider } from "react-redux";

import "./scripts";

window.store = store;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
