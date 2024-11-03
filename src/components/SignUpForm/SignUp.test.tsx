import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react';

import { useValidateForm } from '../../hooks';
import { SignUpForm } from './SignUpForm.tsx';
import signUpSlice from '../../store/signUp/signUpSlice.ts';
import { ROUTES } from '../../constants';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../../hooks', () => ({
  useValidateForm: jest.fn(),
}));

jest.mock('../../db');

describe('SignUpForm', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  const initialState = {
    email: 'test@testing.com',
    password: 'testCheck!',
    confirmPassword: 'testCheck!',
  };

  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        signUp: signUpSlice,
      },
      preloadedState: {
        signUp: initialState,
      },
    });
  });
  it('renders the Sign Up component with correct state values', () => {
    (useValidateForm as jest.Mock).mockReturnValue({
      validateEmail: jest.fn(),
      validatePassword: jest.fn(),
      passwordValid: false,
      passwordError: '',
      emailError: '',
      emailValid: false,
      email: initialState.email,
      setEmail: jest.fn(),
      password: initialState.password,
      confirmPassword: initialState.confirmPassword,
      setPassword: jest.fn(),
      setPasswordError: jest.fn(),
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignUpForm />
        </MemoryRouter>
      </Provider>,
    );

    const emailInput = screen.getByDisplayValue('test@testing.com');
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getAllByText(/Password/i);
    passwordInput.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  it('renders all form correctly', () => {
    (useValidateForm as jest.Mock).mockReturnValue({
      validateEmail: jest.fn(),
      validatePassword: jest.fn(),
      passwordValid: false,
      passwordError: '',
      emailError: '',
      emailValid: false,
      email: '',
      setEmail: jest.fn(),
      password: '',
      setPassword: jest.fn(),
      setPasswordError: jest.fn(),
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignUpForm />
        </MemoryRouter>
      </Provider>,
    );
    const loginButton = screen.getByRole('button', { name: /Login/ });
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toBeDisabled();

    expect(screen.getByText(/Already have account/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter email/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter password/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Confirm Password/)).toBeInTheDocument();
  });

  it('navigate correctly to sign in', () => {
    (useValidateForm as jest.Mock).mockReturnValue({
      validateEmail: jest.fn(),
      validatePassword: jest.fn(),
      passwordValid: false,
      passwordError: '',
      emailError: '',
      emailValid: false,
      email: '',
      setEmail: jest.fn(),
      password: '',
      setPassword: jest.fn(),
      setPasswordError: jest.fn(),
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignUpForm />
        </MemoryRouter>
      </Provider>,
    );

    const loginButton = screen.getByTestId(/signin-link/);
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveAttribute('href', ROUTES.SIGN_IN);
  });
});
