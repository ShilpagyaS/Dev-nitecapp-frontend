import { configureStore } from "@reduxjs/toolkit";
import auth from "@/store/slices/Auth";
import logger from "redux-logger";
import product from "./slices/product";
export const store = configureStore({
  reducer: {
    auth,
    product
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
