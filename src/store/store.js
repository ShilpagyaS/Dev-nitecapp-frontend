import { configureStore } from "@reduxjs/toolkit";
import auth from "@/store/slices/Auth";
import logger from "redux-logger";
import product from "./slices/product";
import ingredients from './slices/ingredients'
export const store = configureStore({
  reducer: {
    auth,
    product,
    ingredients

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
