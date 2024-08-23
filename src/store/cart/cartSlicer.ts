import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Product, ProductCart } from '../../types/types.tsx';
import { addPrices, multiplyPrice, subtractPrices } from '../utils.ts';
import { CATEGORY } from '../../constants';
import { addToCart as addToDb } from '../../db.ts';

export interface CartState {
  countOfProducts: number;
  price: string;
  products: ProductCart[];
}

type AddToCartQuickPayload = {
  product: Product;
  quantity: number;
};

const initialState: CartState = {
  countOfProducts: 0,
  price: '0',
  products: [],
};

export const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addToCartQuick: (
      state: CartState,
      action: PayloadAction<AddToCartQuickPayload>,
    ) => {
      const { product, quantity } = action.payload;

      const existingProductIndex = state.products.findIndex(
        (item) => item.title === product.title,
      );

      // Обновляем общее количество товаров в корзине
      state.countOfProducts += quantity;
      // Обновляем общую цену товаров в корзине
      state.price = addPrices(
        state.price,
        multiplyPrice(product.price!, quantity), // добавляем корректную цену с учетом количества
      );

      if (existingProductIndex >= 0) {
        const existingProduct = state.products[existingProductIndex];
        const updatedQuantity = existingProduct.quantity + quantity;
        const updatedSubtotal = addPrices(
          existingProduct.subtotal,
          multiplyPrice(product.price || '0', quantity), // умножаем цену на количество
        );

        state.products[existingProductIndex] = {
          ...existingProduct,
          quantity: updatedQuantity,
          subtotal: updatedSubtotal,
        };
      } else {
        state.products.push({
          ...product,
          category: CATEGORY.CART,
          quantity: quantity,
          subtotal: multiplyPrice(product.price || '0', quantity), // умножаем цену на количество
        });
      }
    },
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
    deleteFromCart: (state, action: PayloadAction<ProductCart>) => {
      const deleteProductIndex = state.products.findIndex(
        (item) => item.title === action.payload.title,
      );
      state.countOfProducts = state.countOfProducts - action.payload.quantity;
      state.price = subtractPrices(state.price, action.payload.subtotal);

      const existingProduct = state.products[deleteProductIndex];

      const updatedSubtotal = subtractPrices(
        existingProduct.subtotal,
        existingProduct.price || '0',
      );

      state.products[deleteProductIndex] = {
        ...existingProduct,
        subtotal: updatedSubtotal,
      };
      state.products.splice(deleteProductIndex, 1);
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart, addToCartQuick } =
  cartSlice.actions;
export default cartSlice.reducer;
