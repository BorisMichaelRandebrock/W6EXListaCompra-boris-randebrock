import { createSlice } from "@reduxjs/toolkit";

const shoppingSlice = createSlice({
  name: "shopping",
  initialState: [],
  reducers: {
    loadShopping: (shopping, action) => [...action.payload],
    addShopping: (shoppings, action) => [...shoppings, action.payload],
    removeShopping: (shoppings, action) => [
      shoppings.filter((shopping, action) => shopping.id !== action.payload),
    ],
  },
});

export const { loadShopping: loadShoppingActionsCreator } =
  shoppingSlice.actions;
export default shoppingSlice.reducer;
