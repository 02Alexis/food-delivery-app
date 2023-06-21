import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import { restaurantsReducer } from "../reducers/restaurantsReducers";
import { platosReducer } from "../reducers/platosReducer";

const reducer = {
  user: userReducer,
  restaurantsStore: restaurantsReducer,
  platos: platosReducer,
};

const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;