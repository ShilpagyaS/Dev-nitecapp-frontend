import { configureStore } from "@reduxjs/toolkit";
import auth from "@/store/slices/Auth";
import logger from "redux-logger";
import product from "./slices/product";
import wine from "./slices/Wine";
import cocktail from "./slices/Cocktail";
import spirit from "./slices/Spirit";

export const store = configureStore({
  reducer: {
    auth,
    product,
    wine,
    cocktail,
    spirit,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
