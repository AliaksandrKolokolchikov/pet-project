import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';

import { SignInForm } from './SignInForm.tsx';
import { useValidateForm } from '../../hooks';
import { getUserByCredentials } from '../../db.ts';
import { ROUTES } from '../../constants';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../../hooks', () => ({
  useValidateForm: jest.fn(),
}));

jest.mock('../../db');

describe('SignInForm', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders all form elements correctly', () => {
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
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>,
    );

    const loginButton = screen.getByRole('button', { name: /Login/ });
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toBeDisabled();

    expect(screen.getByText(/Don’t have an account\?/)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/Email/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your password/)).toBeInTheDocument();

    expect(
      screen.getByRole('checkbox', { name: /Remember me/ }),
    ).toBeInTheDocument();

    expect(screen.getByText(/Forget Password/)).toBeInTheDocument();
  });

  it('validates email and password fields', async () => {
    const mockValidateForm = {
      validateEmail: jest.fn(),
      validatePassword: jest.fn(),
      passwordValid: false,
      passwordError: '',
      emailError: '',
      setPasswordError: jest.fn(),
      emailValid: true,
      email: 'test@example.com',
      setEmail: jest.fn(),
      password: 'password123',
      setPassword: jest.fn(),
    };

    (useValidateForm as jest.Mock).mockReturnValue(mockValidateForm);
    (getUserByCredentials as jest.Mock).mockResolvedValue(null);

    render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>,
    );

    const loginButton = screen.getByRole('button', { name: /Login/i });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(mockValidateForm.setPasswordError).toHaveBeenCalledWith(
        'Invalid credentials',
      );
    });
  });

  it('navigates correctly to sign up', () => {
    const mockValidateForm = {
      validateEmail: jest.fn(),
      validatePassword: jest.fn(),
      passwordValid: false,
      passwordError: '',
      emailError: '',
      setPasswordError: jest.fn(),
      emailValid: true,
      email: 'test@example.com',
      setEmail: jest.fn(),
      password: 'password123',
      setPassword: jest.fn(),
    };

    (useValidateForm as jest.Mock).mockReturnValue(mockValidateForm);
    (getUserByCredentials as jest.Mock).mockResolvedValue(null);
    render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>,
    );

    const registerButton = screen.getByText(/Register/);
    expect(registerButton).toBeInTheDocument();
    expect(registerButton).toHaveAttribute('href', ROUTES.SIGN_UP);
  });
});
