import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/productSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export default store;
