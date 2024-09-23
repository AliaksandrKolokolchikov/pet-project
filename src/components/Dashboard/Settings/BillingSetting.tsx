import { ToastContainer } from 'react-toastify';

import { useBillingSetting, useValidateForm } from '../../../hooks';
import { InputField } from '../InputField.tsx';

export const BillingSetting = () => {
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
    phoneError,
    emailError,
    lastNameError,
    email,
  } = useValidateForm();

  const {
    isButtonDisabled,
    handleFormSubmit,
    userInfo,
    handleInputChange,
    componentName,
    setComponentName,
    address,
    setAddressName,
    country,
    setCountry,
    zipCode,
    setZipCode,
    states,
    setStates,
  } = useBillingSetting(email);

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
              <InputField
                label="First name"
                type="text"
                value={userInfo.firstName}
                error={nameError}
                valid={nameValid}
                onChange={(e) => {
                  setName(e.target.value);
                  validateName(e.target.value);
                  handleInputChange(e);
                }}
                placeholder="First name"
                name="firstName"
                width="w-[302px]"
                widthError="w-[302px]"
              />

              <InputField
                label="Last name"
                type="text"
                value={userInfo.lastName}
                error={lastNameError}
                valid={lastNameValid}
                onChange={(e) => {
                  setLastName(e.target.value);
                  validateLastName(e.target.value);
                  handleInputChange(e);
                }}
                placeholder="Last name"
                name="lastName"
                width="w-[302px]"
                widthError="w-[302px]"
              />

              <InputField
                label="Company Name"
                type="text"
                value={componentName}
                onChange={(e) => setComponentName(e.target.value)}
                placeholder="Company name"
                name="companyName"
                width="w-[302px]"
                widthError="w-[302px]"
                valid={false}
              />
            </div>

            <div className="pt-4">
              <InputField
                label="Street Address"
                type="text"
                value={address}
                onChange={(e) => {
                  setAddressName(e.target.value);
                }}
                placeholder="Street Address"
                name="StreetAddress"
                width="w-[936px]"
                valid={false}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <InputField
                label="Country / Region"
                type="text"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                placeholder="Select"
                name="country"
                width="w-[302px]"
                valid={false}
              />

              <InputField
                label="States"
                type="text"
                value={states}
                onChange={(e) => {
                  setStates(e.target.value);
                }}
                placeholder="States"
                name="state"
                width="w-[302px]"
                valid={false}
              />

              <InputField
                label="Zip Code"
                type="text"
                value={zipCode}
                onChange={(e) => {
                  setZipCode(e.target.value);
                }}
                placeholder="Zip code"
                name="zipCode"
                width="w-[302px]"
                valid={false}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <InputField
                label="Email"
                type="email"
                value={userInfo.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                  handleInputChange(e);
                }}
                placeholder="Email Address"
                name="email"
                width="w-[460px]"
                valid={emailValid}
                error={emailError}
              />

              <InputField
                label="Email"
                type="tel"
                value={userInfo.phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  validateNumber(e.target.value);
                  handleInputChange(e);
                }}
                placeholder="Phone number"
                name="phone"
                width="w-[460px]"
                valid={phoneValid}
                error={phoneError}
              />
            </div>
          </div>
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
        <ToastContainer containerId="containerID2" />
      </form>
    </>
  );
};
