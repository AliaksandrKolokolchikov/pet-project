import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InputState = {
  email: string;
  password: string;
  confirmPassword: string;
};
const initialState: InputState = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    emailChange: (state: InputState, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    passwordChange: (state: InputState, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    confirmPasswordChange: (
      state: InputState,
      action: PayloadAction<string>,
    ) => {
      state.confirmPassword = action.payload;
    },
  },
});

export const { emailChange, passwordChange, confirmPasswordChange } =
  signUpSlice.actions;
export default signUpSlice.reducer;
