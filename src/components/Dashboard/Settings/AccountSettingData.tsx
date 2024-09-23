import { ToastContainer } from 'react-toastify';
import { useValidateForm, useBillingSetting } from '../../../hooks';
import { InputField } from '../InputField.tsx';

export const AccountSettingData = () => {
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

  const { isButtonDisabled, handleFormSubmit, userInfo, handleInputChange } =
    useBillingSetting(email);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="border-b h-[62px]">
          <p className="text-[20px] font-medium pl-6 pt-[18px]">
            Account Settings
          </p>
        </div>

        <InputField
          label="First name"
          type="text"
          value={userInfo.firstName}
          error={nameError}
          valid={nameValid}
          onChange={(e) => {
            handleInputChange(e);
            setName(e.target.value);
            validateName(e.target.value);
          }}
          placeholder="First name"
          name="firstName"
          width="w-[512px]"
          additionalClass="pl-6 pt-4"
        />

        <InputField
          label="Last name"
          type="text"
          value={userInfo.lastName}
          error={lastNameError}
          valid={lastNameValid}
          onChange={(e) => {
            handleInputChange(e);
            setLastName(e.target.value);
            validateLastName(e.target.value);
          }}
          placeholder="Last name"
          name="lastName"
          width="w-[512px]"
          additionalClass="pl-6 pt-4"
        />

        <InputField
          label="Email"
          type="email"
          value={userInfo.email}
          error={emailError}
          valid={emailValid}
          onChange={(e) => {
            handleInputChange(e);
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          placeholder="Email"
          name="email"
          width="w-[512px]"
          additionalClass="pl-6 pt-4"
        />

        <InputField
          label="Phone Number"
          type="tel"
          value={userInfo.phone}
          error={phoneError}
          valid={phoneValid}
          onChange={(e) => {
            handleInputChange(e);
            setPhone(e.target.value);
            validateNumber(e.target.value);
          }}
          placeholder="Phone Number"
          name="phone"
          width="w-[512px]"
          additionalClass="pl-6 pt-4"
        />

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
        <ToastContainer containerId="containerID1" />
      </form>
    </>
  );
};
