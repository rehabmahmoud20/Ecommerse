import { createSlice } from "@reduxjs/toolkit";

// initialization
const initialState = {
  cartVal: 0,
  products: [],
};
// reducer => state + action
export const shoppingslice = createSlice({
  name: "updatingCart",
  initialState,
  reducers: {
    updateCartArray(state, action) {
      const arryCopy = [...state.products];
      const flag = arryCopy.some((e) => {
        return e.id === action.payload.id;
      });
      if (!flag) {
        state.products=[...state.products,{...action.payload,quantity:1}]}
    },
    updateCartCount(state,action){
      state.cartVal = state.cartVal + action.payload;
    },
    decreaseCartCount(state,action){
      state.cartVal = state.cartVal - action.payload;
    }
  
  },
});

// extract action
export const { updateCartCount } = shoppingslice.actions;
export const { decreaseCartCount } = shoppingslice.actions;
export const { updateCartArray } = shoppingslice.actions;
console.log(shoppingslice)
