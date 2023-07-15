import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/globalTypes";

// Define a type for the slice state
interface ICart {
  products: Array<IProduct>;
  total: number;
}

// Define the initial state using that type
const initialState: ICart = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const productExists = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (productExists) {
        productExists.quantity! += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.total += action.payload.price;
    },
    removeOne: (state, action: PayloadAction<IProduct>) => {
      const productToRemove = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (productToRemove) {
        if (productToRemove.quantity === 1) {
          state.products = state.products.filter(
            (product) => product._id !== productToRemove._id
          );
        } else {
          productToRemove.quantity! -= 1;
        }
      }

      state.total -= action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );

      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addToCart, removeOne, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
