import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import Reducer from "./reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(Reducer);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default store;
