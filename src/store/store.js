import { configureStore } from "@reduxjs/toolkit";
import auth from "@/store/slices/Auth";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
