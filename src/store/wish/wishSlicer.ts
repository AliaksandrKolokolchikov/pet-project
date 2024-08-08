import { Product } from '../../types/types.tsx';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CATEGORY } from '../../constants';

export interface WishState {
  products: Product[];
}

const initialState: WishState = {
  products: [],
};

export const wishSlice = createSlice({
  initialState,
  name: 'wish',
  reducers: {
    addToWish: (state: WishState, action: PayloadAction<Product>) => {
      const existingWishIndex = state.products.findIndex(
        (item) => item.title === action.payload.title,
      );
      if (existingWishIndex >= 0) {
        const existingProduct = state.products[existingWishIndex];
        state.products[existingWishIndex] = {
          ...existingProduct,
        };
      } else {
        state.products.push({
          ...action.payload,
          category: CATEGORY.CART,
        });
      }
    },
    removeFromWish: (state: WishState, action: PayloadAction<Product>) => {
      const existingWishIndex = state.products.findIndex(
        (item) => item.title === action.payload.title,
      );
      if (existingWishIndex >= 1) {
        const existingProduct = state.products[existingWishIndex];
        state.products[existingWishIndex] = {
          ...existingProduct,
        };
      } else {
        state.products.splice(existingWishIndex, 1);
      }
    },
  },
});

export const { addToWish, removeFromWish } = wishSlice.actions;
export default wishSlice.reducer;