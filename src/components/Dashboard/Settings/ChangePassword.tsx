import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { useValidateForm } from '../../../hooks';
import { useDispatch } from 'react-redux';
import {
  confirmPasswordChange,
  passwordChange,
} from '../../../store/signUp/signUpSlice.ts';
import { updateUserPassword } from '../../../db.ts';

export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [savedPassword, setSavedPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCurrentPasswordCorrect, setIsCurrentPasswordCorrect] =
    useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const {
    validatePassword,
    passwordValid,
    passwordError,
    validatePasswordConfirm,
    confirmPasswordError,
    password,
    setPassword,
  } = useValidateForm();

  const dispatch = useDispatch();

  const handleSubmitPassword = async (e: FormEvent) => {
    e.preventDefault();
    const email = localStorage.getItem('userEmail');

    if (!email) {
      setError('User not logged in');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const result = await updateUserPassword(email, password);
      if (result) {
        setSuccess('Password updated successfully');
        localStorage.setItem('userPassword', password);

        setCurrentPassword('');
        setPassword('');
        setConfirmPassword('');
        setIsCurrentPasswordCorrect(false);

        dispatch(passwordChange(password));
        dispatch(confirmPasswordChange(confirmPassword));
      } else {
        setError('Failed to update password');
      }
    } catch (error) {
      setError('Error updating password');
    }
  };

  const handleCurrentPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    setCurrentPassword(inputPassword);

    if (inputPassword === savedPassword) {
      setIsCurrentPasswordCorrect(true);
    } else {
      setIsCurrentPasswordCorrect(false);
    }
  };

  useEffect(() => {
    const storedPassword = localStorage.getItem('userPassword');
    if (storedPassword) {
      setSavedPassword(storedPassword);
    }
  }, []);

  const isDisabled =
    !passwordValid || !confirmPassword || !isCurrentPasswordCorrect;

  return (
    <>
      <form
        onSubmit={handleSubmitPassword}
        className="border rounded-2xl mt-6 mb-20"
      >
        <div className="border-b h-[62px]">
          <p className="text-[20px] font-medium pl-6 pt-[18px]">
            Change Password
          </p>
        </div>

        <div className="pl-6 pt-6">
          <p className="text-[14px]">Current Password</p>
          <input
            className={`border w-[936px] h-[49px] focus:outline-none rounded-[8px] pl-4 ${
              currentPassword && !isCurrentPasswordCorrect
                ? 'border-red-500 focus:ring-red-500'
                : isCurrentPasswordCorrect
                  ? 'border-green-500 bg-green-100 focus:ring-green-500'
                  : ''
            }`}
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
          />
        </div>

        <div className="flex gap-4 mt-4 px-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type={'text'}
              id="password"
              value={password}
              placeholder="New password"
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
              className={`border w-[460px] h-[49px] focus:outline-none rounded-[8px] pl-4 ${
                passwordError
                  ? 'border-red-500 focus:ring-red-500'
                  : 'focus:ring-green-500'
              } ${passwordValid ? 'bg-green-100 border-green-500' : ''}`}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="confirm-password" className="block text-gray-700">
              Confirm Password
            </label>
            <input
              type={'text'}
              id="confirm-password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                validatePasswordConfirm(e.target.value);
              }}
              className={`border w-[460px] h-[49px] focus:outline-none rounded-[8px] pl-4 ${
                confirmPasswordError
                  ? 'border-red-500 focus:ring-red-500'
                  : 'focus:ring-green-500'
              } ${!confirmPasswordError && confirmPassword ? 'bg-green-100 border-green-500' : ''}`}
              required
            />
          </div>
        </div>

        {(passwordError || confirmPasswordError) && (
          <div className="text-red-500 mt-1">
            {passwordError || confirmPasswordError}
          </div>
        )}

        {error && <p className="text-red-400">{error}</p>}
        {success && <p className="text-green-500 ">{success}</p>}
        <button
          type="submit"
          disabled={isDisabled}
          className={`${
            isDisabled || !isCurrentPasswordCorrect
              ? 'bg-[#56AC591A] text-gray-500 cursor-not-allowed'
              : 'bg-[#00B307] text-white hover:bg-[#2C742F] cursor-pointer'
          } w-[167px] h-[45px] rounded-full ml-6 my-6`}
        >
          <p className="text-[14px] font-semibold">Save Changes</p>
        </button>

        <ToastContainer />
      </form>
    </>
  );
};
