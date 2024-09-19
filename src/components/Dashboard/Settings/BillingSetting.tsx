import { useState, useEffect, FormEvent } from 'react';
import { ToastContainer } from 'react-toastify';

import { useNotification, useUserInfo, useValidateForm } from '../../../hooks';

export const BillingSetting = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [componentName, setComponentName] = useState('');

  const { userInfo, handleInputChange, handleSubmit } = useUserInfo();

  const {
    validateLastName,
    validateName,
    validateEmail,
    setName,
    setLastName,
    setPhone,
    validateNumber,
    setEmail,
    nameValid,
    nameError,
    lastNameValid,
    emailValid,
    phoneValid,
    isDisabled,
    phoneError,
    emailError,
    lastNameError,
  } = useValidateForm();

  const { notifyIsSuccess } = useNotification();

  const isDisabledButton = !(isDisabled || !isSubmitting);

  useEffect(() => {
    if (
      userInfo.firstName !== '' &&
      userInfo.lastName !== '' &&
      userInfo.email !== '' &&
      userInfo.phone !== ''
    ) {
      setIsSubmitting(true);
    } else {
      setIsSubmitting(false);
    }
  }, [userInfo.firstName, userInfo.lastName, userInfo.email, userInfo.phone]);

  useEffect(() => {
    if (!isDisabled) {
      setIsSubmitting(false);
    }
  }, [isDisabled]);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    handleSubmit(e);
    notifyIsSuccess();
  };
  return (
    <>
      <form onSubmit={handleFormSubmit} className="border mt-6 rounded-2xl">
        <div className="border-b h-[62px]">
          <p className="text-[20px] font-medium pl-6 pt-[18px]">
            Billing Address
          </p>
        </div>
        <div className="flex font-[Poppins] pt-8 px-[2%]">
          <div className="flex flex-col">
            <div className="flex gap-4">
              <div>
                <p className="mb-2 text-[14px] text-[#1A1A1A]"> First name</p>
                <input
                  className={`border w-[302px] h-[49px] focus:outline-none rounded-[8px] pl-4 ${
                    nameError
                      ? 'border-red-500 focus:ring-red-500'
                      : nameValid
                        ? 'bg-green-100 border-green-500 focus:ring-green-500'
                        : 'focus:ring-green-500'
                  }`}
                  type="text"
                  placeholder="Your first name"
                  onChange={(e) => {
                    setName(e.target.value);
                    validateName(e.target.value);
                    handleInputChange(e);
                  }}
                  name="firstName"
                  value={userInfo.firstName}
                />
                {nameError && (
                  <div className="text-red-500 mt-1">{nameError}</div>
                )}
              </div>
              <div>
                <p className="mb-2 text-[14px] text-[#1A1A1A]">Last name</p>
                <input
                  className={`border w-[302px] h-[49px] focus:outline-none rounded-[8px] pl-4 ${
                    lastNameError
                      ? 'border-red-500 focus:ring-red-500'
                      : lastNameValid
                        ? 'bg-green-100 border-green-500 focus:ring-green-500'
                        : 'focus:ring-green-500'
                  }`}
                  type="text"
                  placeholder="Your last name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                    validateLastName(e.target.value);
                    handleInputChange(e);
                  }}
                  name="lastName"
                  value={userInfo.lastName}
                />
                {lastNameError && (
                  <div className="text-red-500 mt-1">{lastNameError}</div>
                )}
              </div>
              <div>
                <div className="flex gap-1 mb-2 text-[14px] text-[#1A1A1A]">
                  <p>Company Name </p>
                  <p className="text-[#808080]">(optional)</p>
                </div>
                <input
                  className="border w-[302px] h-[49px] focus:outline-none rounded-[8px] pl-4"
                  type="text"
                  placeholder="Company name"
                  name="companyName"
                  value={componentName}
                  onChange={(e) => {
                    setComponentName(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="pt-4">
              <p className="mb-2 text-[14px] text-[#1A1A1A]">Street Address</p>
              <input
                onChange={handleInputChange}
                className="border w-[936px] h-[49px] focus:outline-none rounded-[8px] pl-4"
                type="text"
                placeholder="Street Address"
                name="address"
                value={userInfo.address}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <div>
                <p className="mb-2 text-[14px] text-[#1A1A1A]">
                  Country / Region
                </p>
                <input
                  className="border w-[302px] h-[49px] focus:outline-none rounded-[8px] pl-4"
                  type="text"
                  placeholder="Select"
                  name="country"
                />
              </div>
              <div>
                <p className="mb-2 text-[14px] text-[#1A1A1A]">States</p>
                <input
                  className="border w-[302px] h-[49px] focus:outline-none rounded-[8px] pl-4"
                  type="text"
                  placeholder="States"
                  name="state"
                />
              </div>
              <div>
                <p className=" mb-2 text-[14px] text-[#1A1A1A]">Zip Code</p>
                <input
                  className="border w-[302px] h-[49px] focus:outline-none rounded-[8px] pl-4"
                  type="text"
                  placeholder="Zip code"
                  name="zipCode"
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <div>
                <p className="mb-2 text-[14px] text-[#1A1A1A]">Email</p>
                <input
                  className={`border w-[460px] h-[49px] focus:outline-none rounded-[8px] pl-4 ${
                    emailError
                      ? 'border-red-500 focus:ring-red-500'
                      : emailValid
                        ? 'bg-green-100 border-green-500 focus:ring-green-500'
                        : 'focus:ring-green-500'
                  }`}
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                    handleInputChange(e);
                  }}
                  name="email"
                  value={userInfo.email}
                />
                {emailError && (
                  <div className="text-red-500 mt-1">{emailError}</div>
                )}
              </div>
              <div>
                <p className="mb-2 text-[14px] text-[#1A1A1A]">Phone</p>
                <input
                  className={`border w-[460px] h-[49px] focus:outline-none rounded-[8px] pl-4 ${
                    phoneError
                      ? 'border-red-500 focus:ring-red-500'
                      : phoneValid
                        ? 'bg-green-100 border-green-500 focus:ring-green-500'
                        : 'focus:ring-green-500'
                  }`}
                  type="tel"
                  placeholder="Phone number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                    validateNumber(e.target.value);
                    handleInputChange(e);
                  }}
                  name="phone"
                  value={userInfo.phone}
                />
                {phoneError && (
                  <div className="text-red-500 mt-1">{phoneError}</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={isDisabledButton}
          className={`${
            isDisabledButton
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
