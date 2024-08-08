import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';

import eyeIcon from '../../assets/SignIn/eye.svg';
import { getUserByCredentials } from '../../db.ts';
import { ROUTES } from '../../constants';
import { useDispatch } from 'react-redux';
import { emailChange, passwordChange } from '../../store/signIn/signInSlice.ts';

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const validateEmail = (email: string) => {
    if (!validator.isEmail(email)) {
      setEmailError('Invalid email address');
      setEmailValid(false);
    } else {
      setEmailError('');
      setEmailValid(true);
    }
  };

  const validatePassword = (password: string) => {
    if (
      !validator.isLength(password, { min: 8 }) ||
      validator.isAlphanumeric(password)
    ) {
      setPasswordError(
        'Password must be at least 8 characters long and include special characters',
      );
      setPasswordValid(false);
    } else {
      setPasswordError('');
      setPasswordValid(true);
    }
  };

  const isDisabled = password && email && !passwordError && !emailError;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    validateEmail(email);
    validatePassword(password);
    await getUserByCredentials(email, password);
    dispatch(emailChange(email));
    dispatch(passwordChange(password));
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md max-w-[520px] w-full"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
        <div className="mb-4 relative">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
              emailError
                ? 'border-red-500 focus:ring-red-500'
                : emailValid
                  ? 'bg-green-100 border-green-500 focus:ring-green-500'
                  : 'focus:ring-green-500'
            }`}
            required
          />
          {emailValid && !emailError && (
            <span className="absolute right-3 top-[65%] transform -translate-y-1/2 text-green-500">
              ✔️
            </span>
          )}
        </div>
        {emailError && <div className="text-red-500 mt-1">{emailError}</div>}
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
              passwordError
                ? 'border-red-500 focus:ring-red-500'
                : 'focus:ring-green-500'
            } ${passwordValid ? 'bg-green-100 border-green-500' : ''}`}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute bg-cover bg-center mt-3 right-0 mr-2 px-3 py-2 focus:outline-none"
            style={{ backgroundImage: `url(${eyeIcon})` }}
          ></button>
          {passwordError && (
            <div className="text-red-500 mt-1">{passwordError}</div>
          )}
          {passwordValid && <div className="text-green-500 mt-1">✔️</div>}
        </div>
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            Remember me
          </label>
          <a href="#" className="text-sm text-green-500">
            Forget Password
          </a>
        </div>
        <button
          type="submit"
          disabled={Boolean(!isDisabled)}
          className="w-full bg-green-lime text-white py-2 rounded focus:outline-none hover:bg-green-600 transition duration-200 disabled:bg-[#2C742F33] disabled:text-[#2C742F]"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Don’t have an account?{' '}
          <Link to={ROUTES.SIGN_UP} className="text-green-500 font-bold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};
