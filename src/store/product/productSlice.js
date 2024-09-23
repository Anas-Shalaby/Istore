import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {
    setProductsReducer(state = null, action) {
      state.items = action.payload;
    },
  },
});

export const { setProductsReducer } = productSlice.actions;
export default productSlice.reducer;
