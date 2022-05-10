import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "../ShoppingSlice";

const store = configureStore({
  reducer: {
    shoppingReducer,
  },
});

export default store;
