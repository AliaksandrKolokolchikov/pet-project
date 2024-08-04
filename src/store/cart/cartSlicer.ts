import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductCart } from '../../types/types.tsx';
import { addPrices, subtractPrices } from '../utils.ts';
import { CATEGORY } from '../../constants';
import { addToCart as addToDb } from '../../db.ts';

export interface CartState {
  countOfProducts: number;
  price: string;
  products: ProductCart[];
}

const initialState: CartState = {
  countOfProducts: 0,
  price: '0',
  products: [],
};

export const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Product>) => {
      const existingProductIndex = state.products.findIndex(
        (item) => item.title === action.payload.title,
      );

      state.countOfProducts = state.countOfProducts + 1;
      state.price = addPrices(state.price, action.payload.price!);
      if (existingProductIndex >= 0) {
        const existingProduct = state.products[existingProductIndex];
        const updatedQuantity = existingProduct.quantity + 1;
        const updatedSubtotal = addPrices(
          existingProduct.subtotal,
          action.payload.price || '0',
        );

        // Обновляем продукт в массиве
        state.products[existingProductIndex] = {
          ...existingProduct,
          quantity: updatedQuantity,
          subtotal: updatedSubtotal,
        };
      } else {
        state.products.push({
          ...action.payload,
          category: CATEGORY.CART,
          quantity: 1,
          subtotal: action.payload.price || '0',
        });
      }
      addToDb(state.products);
    },
    removeFromCart: (state, action: PayloadAction<ProductCart>) => {
      const existingProductIndex = state.products.findIndex(
        (item) => item.title === action.payload.title,
      );
      state.countOfProducts = state.countOfProducts - 1;
      state.price = subtractPrices(state.price, action.payload.price!);

      if (existingProductIndex >= 0) {
        const existingProduct = state.products[existingProductIndex];

        if (existingProduct.quantity > 1) {
          const updatedQuantity = existingProduct.quantity - 1;
          const updatedSubtotal = subtractPrices(
            existingProduct.subtotal,
            existingProduct.price || '0',
          );

          state.products[existingProductIndex] = {
            ...existingProduct,
            quantity: updatedQuantity,
            subtotal: updatedSubtotal,
          };
        } else {
          state.products.splice(existingProductIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
