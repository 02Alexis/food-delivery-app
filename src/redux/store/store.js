import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import { restaurantsReducer } from "../reducers/restaurantsReducers";
import { platosReducer } from "../reducers/platosReducer";
import { buttonsReducer } from "../reducers/buttonsReducer";

const reducer = {
  user: userReducer,
  restaurantsStore: restaurantsReducer,
  platos: platosReducer,
  buttonsStore: buttonsReducer,
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