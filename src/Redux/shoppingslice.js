import { createSlice } from "@reduxjs/toolkit";

// initialization
const initialState = {
  cartVal: 0,
  products: [],
  // btn state
  flag: true,
};
// reducer => state + action
export const shoppingslice = createSlice({
  name: "updatingCart",
  initialState,
  reducers: {
    updateCartCount(state, action) {
      state.cartVal = state.cartVal + 1;
      const arryCopy = [...state.products];
      const flag = arryCopy.some((e) => {
        return e.id === action.payload.id;
      });
      if (!flag) {
        state.products=[...state.products,action.payload]
      }
    },
    updateBtnState(state, action) {
      state.flag = action.payload;
    },
  },
});

// extract action
export const { updateCartCount } = shoppingslice.actions;
// export const { addProdToCart } = shoppingslice.actions;
export const { updateBtnState } = shoppingslice.actions;
console.log(shoppingslice)
