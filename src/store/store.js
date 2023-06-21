import { configureStore } from "@reduxjs/toolkit";
import auth from "@/store/slices/Auth";
import logger from "redux-logger";
import product from "./slices/product";
import ingredients from './slices/ingredients'
import brands from './slices/brands'
import allproducts from "./slices/allproducts";
import superAdmin from "./slices/superAdmin";
import notes from "./slices/notes";
import ui from "./slices/ui";
import outlets from './slices/outlet';
import manageusers from './slices/manageusers';
import guests from './slices/guests';
import learn from './slices/learnslice';
import quiz from './slices/quiz'

export const store = configureStore({
  reducer: {
    auth,
    product,
    ingredients,
    brands,
    allproducts,
    superAdmin,
    notes,
    ui,
    outlets,
    manageusers,
    guests,
    learn,
    quiz
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
