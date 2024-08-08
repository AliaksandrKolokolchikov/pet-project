import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InputState = {
  emailInput: string;
  passwordInput: string;
};

const initialState: InputState = {
  emailInput: '',
  passwordInput: '',
};

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    emailChanged: (state: InputState, action: PayloadAction<string>) => {
      state.emailInput = action.payload;
    },
    passwordChanged: (state: InputState, action: PayloadAction<string>) => {
      state.passwordInput = action.payload;
    },
  },
});

export const { emailChanged, passwordChanged } = signInSlice.actions;
export default signInSlice.reducer;
