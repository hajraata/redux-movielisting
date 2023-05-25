import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers";

export const store = configureStore({
  reducer: moviesReducer,
  devTools: true,
});
