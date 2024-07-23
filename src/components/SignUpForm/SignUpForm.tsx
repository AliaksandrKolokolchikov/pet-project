import React, { useState } from 'react';
import validator from 'validator';
import eyeIcon from '../../assets/SignIn/eye.svg';

export const SignUpForm = () => {
  const [emailSign, setEmailSign] = useState('');
  const [passwordSign, setPasswordSign] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [showPasswordSign, setShowPasswordSign] = useState(false);
  const [emailErrorSign, setEmailErrorSign] = useState('');
  const [passwordErrorSign, setPasswordErrorSign] = useState('');
  const [emailValidSign, setEmailValidSign] = useState(false);
  const [passwordValidSign, setPasswordValidSign] = useState(false);
  // const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateEmailSign = (email: string) => {
    if (!validator.isEmail(email)) {
      setEmailErrorSign('Invalid email address');
      setEmailValidSign(false);
    } else {
      setEmailErrorSign('');
      setEmailValidSign(true);
    }
  };

  const validatePassword = (password: string) => {
    if (
      !validator.isLength(password, { min: 8 }) ||
      validator.isAlphanumeric(password)
    ) {
      setPasswordErrorSign(
        'Password must be at least 8 characters long and include special characters',
      );
      setPasswordValidSign(false);
    } else {
      setPasswordErrorSign('');
      setPasswordValidSign(true);
    }
  };

  // const validatePasswordConfirm = (password: string) => {
  //   if (
  //     !validator.isLength(password, { min: 8 }) ||
  //     validator.isAlphanumeric(password) ||
  //     password === passwordSign
  //   ) {
  //     setConfirmPasswordError('Password missmatch');
  //   }
  // };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    validateEmailSign(emailSign);
    validatePassword(passwordSign);
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
            value={emailSign}
            onChange={(e) => {
              setEmailSign(e.target.value);
              validateEmailSign(e.target.value);
            }}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
              emailErrorSign
                ? 'border-red-500 focus:ring-red-500'
                : emailValidSign
                  ? 'bg-green-100 border-green-500 focus:ring-green-500'
                  : 'focus:ring-green-500'
            }`}
            required
          />
          {emailValidSign && !emailErrorSign && (
            <span className="absolute right-3 top-[65%] transform -translate-y-1/2 text-green-500">
              ✔️
            </span>
          )}
        </div>
        {emailErrorSign && (
          <div className="text-red-500 mt-1">{emailErrorSign}</div>
        )}
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type={showPasswordSign ? 'text' : 'password'}
            id="password"
            value={passwordSign}
            onChange={(e) => {
              setPasswordSign(e.target.value);
              validatePassword(e.target.value);
            }}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
              passwordErrorSign
                ? 'border-red-500 focus:ring-red-500'
                : 'focus:ring-green-500'
            } ${passwordValidSign ? 'bg-green-100 border-green-500' : ''}`}
            required
          />
          <label htmlFor="password" className="block text-gray-700">
            Confirm Password
          </label>
          <input
            type={showPasswordSign ? 'text' : 'password'}
            id="password"
            value={passwordSign}
            onChange={(e) => {
              setPasswordSign(e.target.value);
              validatePassword(e.target.value);
            }}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
              passwordErrorSign
                ? 'border-red-500 focus:ring-red-500'
                : 'focus:ring-green-500'
            } ${passwordValidSign ? 'bg-green-100 border-green-500' : ''}`}
            required
          />
          <button
            type="button"
            onClick={() => setShowPasswordSign(!showPasswordSign)}
            className="absolute bg-cover bg-center mt-3 right-0 mr-2 px-3 py-2 focus:outline-none"
            style={{ backgroundImage: `url(${eyeIcon})` }}
          ></button>

          {passwordErrorSign && (
            <div className="text-red-500 mt-1">{passwordErrorSign}</div>
          )}
          {passwordValidSign && <div className="text-green-500 mt-1">✔️</div>}
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
          className="w-full bg-green-lime text-white py-2 rounded focus:outline-none hover:bg-green-600 transition duration-200"
        >
          Login
        </button>
        <p className="text-center mt-4 text-[14px]">
          Already have account{' '}
          <a href="" className="text-[14px] font-bold">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};
