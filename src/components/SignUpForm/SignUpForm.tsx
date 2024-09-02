import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import { useDispatch } from 'react-redux';

import { ROUTES } from '../../constants';
import eyeIcon from '../../assets/SignIn/eye.svg';
import {
  emailChange,
  passwordChange,
  confirmPasswordChange,
} from '../../store/signUp/signUpSlice.ts';
import { addUser } from '../../db.ts';

export const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmailSign = (email: string) => {
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
    } else {
      setPasswordError('');
      setPasswordValid(true);
    }
  };

  const validatePasswordConfirm = (confirmPassword: string) => {
    if (confirmPassword !== password) {
      setConfirmPasswordError('Password mismatch');
      setPasswordValid(false);
    } else {
      setConfirmPasswordError('');
      setPasswordValid(true);
    }
  };

  const isSubmitDisabled =
    password &&
    confirmPassword &&
    email &&
    !passwordError &&
    !confirmPasswordError &&
    !emailError;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    validateEmailSign(email);
    validatePassword(password);
    validatePasswordConfirm(confirmPassword);
    await addUser({ email, password });
    dispatch(emailChange(email));
    dispatch(passwordChange(password));
    dispatch(confirmPasswordChange(confirmPassword));
    navigate('/signin');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md max-w-[520px] w-full"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create Account
        </h2>
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
              validateEmailSign(e.target.value);
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
          <label htmlFor="confirm-password" className="block text-gray-700">
            Confirm Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              validatePasswordConfirm(e.target.value);
            }}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
              confirmPasswordError
                ? 'border-red-500 focus:ring-red-500'
                : 'focus:ring-green-500'
            } ${!confirmPasswordError && confirmPassword ? 'bg-green-100 border-green-500' : ''}`}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute bg-cover bg-center mt-3 right-0 mr-2 px-3 py-2 focus:outline-none"
            style={{ backgroundImage: `url(${eyeIcon})` }}
          ></button>

          {(passwordError || confirmPasswordError) && (
            <div className="text-red-500 mt-1">
              {passwordError || confirmPasswordError}
            </div>
          )}
          {passwordValid && <div className="text-green-500 mt-1">✔️</div>}
        </div>
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center text-[#666666] text-[14px]">
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              className="mr-2 "
            />
            Accept all terms & Conditions
          </label>
        </div>
        <button
          type="submit"
          disabled={Boolean(!isSubmitDisabled)}
          className="w-full bg-green-lime text-white py-2 rounded focus:outline-none hover:bg-green-600 transition duration-200 disabled:bg-[#2C742F33] disabled:text-[#2C742F]"
        >
          Login
        </button>
        <p className="text-center mt-4 text-[14px]">
          Already have account{' '}
          <Link to={ROUTES.SIGN_IN} className="text-[14px] font-bold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
