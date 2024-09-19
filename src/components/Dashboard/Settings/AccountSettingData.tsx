import { ToastContainer } from 'react-toastify';
import { FormEvent, useEffect, useRef, useState } from 'react';

import { useNotification, useUserInfo, useValidateForm } from '../../../hooks';
import { updateUserEmail } from '../../../db.ts';

export const AccountSettingData = () => {
  const { userInfo, handleInputChange, handleSubmit } = useUserInfo();
  const { notifyIsSuccess, notifyIsNot } = useNotification();
  const [initialValues, setInitialValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const {
    nameError,
    nameValid,
    setName,
    validateName,
    setLastName,
    setEmail,
    setPhone,
    validateNumber,
    phoneError,
    phoneValid,
    emailError,
    emailValid,
    validateEmail,
    lastNameError,
    lastNameValid,
    validateLastName,
    email,
  } = useValidateForm();

  const isInitialized = useRef(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (!isInitialized.current && userInfo.firstName) {
      setInitialValues({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        phone: userInfo.phone,
      });
      isInitialized.current = true;
    }
  }, [userInfo]);

  useEffect(() => {
    const changes = hasChanges();
    setIsButtonDisabled(!changes);
  }, [userInfo, initialValues]);

  const hasChanges = () => {
    return (
      userInfo.firstName !== initialValues.firstName ||
      userInfo.lastName !== initialValues.lastName ||
      userInfo.email !== initialValues.email ||
      userInfo.phone !== initialValues.phone
    );
  };

  const handleSubmitChange = async (e: FormEvent) => {
    e.preventDefault();
    const currentEmail = localStorage.getItem('userEmail');

    try {
      const result = await updateUserEmail(currentEmail, email);
      if (result) {
        localStorage.setItem('userEmail', email);
        notifyIsSuccess();
        handleSubmit(e);
        setInitialValues(userInfo);
      }
    } catch (error) {
      notifyIsNot();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitChange}>
        <div className="border-b h-[62px] ">
          <p className="text-[20px] font-medium pl-6 pt-[18px]">
            Account Settings
          </p>
        </div>

        <div className="pl-6 pt-6">
          <p className="text-[14px]">First name</p>
          <input
            onChange={(e) => {
              setName(e.target.value);
              validateName(e.target.value);
              handleInputChange(e);
            }}
            className={`border w-[512px] h-[49px] focus:outline-none rounded-[8px] pl-4 ${
              nameError
                ? 'border-red-500 focus:ring-red-500'
                : nameValid
                  ? 'bg-green-100 border-green-500 focus:ring-green-500'
                  : 'focus:ring-green-500'
            }`}
            type="text"
            placeholder="First name"
            value={userInfo.firstName}
            name="firstName"
          />
          {nameError && <div className="text-red-500 mt-1">{nameError}</div>}
        </div>
        <div className="pl-6 pt-4">
          <p className="text-[14px]">Last name</p>
          <input
            className={`border w-[512px] h-[49px] focus:outline-none rounded-[8px] pl-4 ${
              lastNameError
                ? 'border-red-500 focus:ring-red-500'
                : lastNameValid
                  ? 'bg-green-100 border-green-500 focus:ring-green-500'
                  : 'focus:ring-green-500'
            }`}
            type="text"
            placeholder="Last name"
            value={userInfo.lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              validateLastName(e.target.value);
              handleInputChange(e);
            }}
            name="lastName"
          />
          {lastNameError && (
            <div className="text-red-500 mt-1">{lastNameError}</div>
          )}
        </div>
        <div className="pl-6 pt-4">
          <p className="text-[14px]">Email</p>
          <input
            className={`border w-[512px] h-[49px] focus:outline-none rounded-[8px] pl-4 ${
              emailError
                ? 'border-red-500 focus:ring-red-500'
                : emailValid
                  ? 'bg-green-100 border-green-500 focus:ring-green-500'
                  : 'focus:ring-green-500'
            }`}
            type="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
              handleInputChange(e);
            }}
            name="email"
          />
          {emailError && <div className="text-red-500 mt-1">{emailError}</div>}
        </div>
        <div className="pl-6 pt-6">
          <p className="text-[14px]">Phone Number</p>
          <input
            className={`border w-[512px] h-[49px] focus:outline-none rounded-[8px] pl-4 ${
              phoneError
                ? 'border-red-500 focus:ring-red-500'
                : phoneValid
                  ? 'bg-green-100 border-green-500 focus:ring-green-500'
                  : 'focus:ring-green-500'
            }`}
            type="tel"
            placeholder="Phone Number"
            value={userInfo.phone}
            onChange={(e) => {
              setPhone(e.target.value);
              validateNumber(e.target.value);
              handleInputChange(e);
            }}
            name="phone"
          />
          {phoneError && <div className="text-red-500 mt-1">{phoneError}</div>}
        </div>
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`${
            isButtonDisabled
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
