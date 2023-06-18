import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppRoute from "./routes/AppRoute";
import store from "./redux/store/store";
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </React.StrictMode>
);
