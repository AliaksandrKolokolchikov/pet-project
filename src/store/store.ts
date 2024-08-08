import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/cartSlicer.ts';
import wishSlicer from './wish/wishSlicer.ts';
import signInSlice from './signIn/signInSlice.ts';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishSlicer,
    signIn: signInSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
