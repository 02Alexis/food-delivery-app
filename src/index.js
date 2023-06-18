import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppRoute from "./routes/AppRoute";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </React.StrictMode>
);
