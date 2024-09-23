import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import eyeIcon from '../../assets/SignIn/eye.svg';
import { getUserByCredentials } from '../../db.ts';
import { ROUTES } from '../../constants';
import { useValidateForm } from '../../hooks';
import { InputField } from '../Dashboard';

export const SignInForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    validateEmail,
    validatePassword,
    passwordValid,
    passwordError,
    emailError,
    setPasswordError,
    emailValid,
    email,
    setEmail,
    password,
    setPassword,
  } = useValidateForm();

  const isDisabled = password && email && !passwordError && !emailError;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    validateEmail(email);
    validatePassword(password);

    const user = await getUserByCredentials(email, password);

    if (user) {
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('userPassword', user.password);

      sessionStorage.setItem('isAuth', 'true');
      navigate('/');
    } else {
      setPasswordError('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md max-w-[520px] w-full"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
        <div className="mb-4 relative">
          <InputField
            label="Email"
            type="email"
            value={email}
            valid={emailValid}
            error={emailError}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            placeholder="Email"
            name="email"
            width="w-full"
          />
          {emailValid && !emailError && (
            <span className="absolute right-3 top-[65%] transform -translate-y-1/2 text-green-500">
              ✔️
            </span>
          )}
        </div>
        <div className="mb-4 relative">
          <InputField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            error={passwordError}
            valid={passwordValid}
            placeholder="Your password"
            name="password"
            width="w-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute bg-cover bg-center top-[48px] right-0 mr-2 px-3 py-2 focus:outline-none"
            style={{ backgroundImage: `url(${eyeIcon})` }}
          />

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
