import { createSlice } from "@reduxjs/toolkit";
import { getKeyThenIncreaseKey } from "antd/lib/message";

// initialization
const initialState = {
  cartVal: 0,
  products: [],
  totalItemQuant:0
};
// reducer => state + action
export const shoppingslice = createSlice({
  name: "updatingCart",
  initialState,
  reducers: {
    updateCartArray(state, action) {
      // const arryCopy = [...state.products];
      const itemIndex = state.products.findIndex((e) => {
        return e.id === action.payload.id;
      });
      if (itemIndex >= 0) {
        state.products[itemIndex].quantity += 1;
      } else {
        const productCopy = { ...action.payload, quantity: 1 };
        state.products.push(productCopy);
      }
    },
    updateCartCount(state, action) {
      state.cartVal = state.cartVal + action.payload;
    },
    decreaseCartCount(state, action) {
      const itemIndex = state.products.findIndex((e) => {
        return e.id === action.payload.id;
      });
      if (state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity -= 1;
        state.cartVal = state.cartVal - 1;
      } 
    }
  },
});

// extract action
export const { updateCartCount } = shoppingslice.actions;
export const { decreaseCartCount } = shoppingslice.actions;
export const { updateCartArray } = shoppingslice.actions;
export const { increase } = shoppingslice.actions;

console.log(shoppingslice);
