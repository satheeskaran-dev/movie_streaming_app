import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
