import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ROUTES } from '../../constants';
import eyeIcon from '../../assets/SignIn/eye.svg';
import {
  emailChange,
  passwordChange,
  confirmPasswordChange,
} from '../../store/signUp/signUpSlice.ts';
import { addUser } from '../../db.ts';
import { useValidateForm } from '../../hooks';


export const SignUpForm = () => {
  const [accepted, setAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    emailValid,
    passwordValid,
    confirmPasswordError,
    confirmPassword,
    setConfirmPassword,
    validateEmail,
    validatePassword,
    validatePasswordConfirm,
  } = useValidateForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSubmitDisabled =
    password &&
    confirmPassword &&
    email &&
    !passwordError &&
    !confirmPasswordError &&
    !emailError;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    validateEmail(email);
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
            id="email"
            value={email}
            placeholder="Enter email"
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
            placeholder="Enter password"
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

          <label
            htmlFor="confirm-password"
            className="block text-gray-700 pt-4"
          >
            Confirm Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirm-password"
            value={confirmPassword}
            placeholder="Confirm Password"
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
          />

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
          Already have account -{' '}
          <Link
            to={ROUTES.SIGN_IN}
            className="text-[14px] font-bold"
            data-testid="signin-link"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
