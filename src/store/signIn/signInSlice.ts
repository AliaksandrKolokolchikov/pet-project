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
    emailChange: (state: InputState, action: PayloadAction<string>) => {
      state.emailInput = action.payload;
    },
    passwordChange: (state: InputState, action: PayloadAction<string>) => {
      state.passwordInput = action.payload;
    },
  },
});

export const { emailChange, passwordChange } = signInSlice.actions;
export default signInSlice.reducer;
