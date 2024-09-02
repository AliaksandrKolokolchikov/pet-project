import { useState } from 'react';
import validator from 'validator';

export const BillingSetting = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const [phoneValid, setPhoneValid] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [nameValid, setNameValid] = useState<boolean>(false);
  const [lastName, setLastName] = useState<string>('');
  const [lastNameError, setLastNameError] = useState<string>('');
  const [lastNameValid, setLastNameValid] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    if (!validator.isEmail(email)) {
      setEmailError('Invalid email address');
      setEmailValid(false);
    } else {
      setEmailError('');
      setEmailValid(true);
    }
  };

  const validateNumber = (number: string) => {
    if (!validator.isMobilePhone(number)) {
      setPhoneError('Please enter your phone number');
      setPhoneValid(false);
    } else {
      setPhoneError('');
      setPhoneValid(true);
    }
    if (!validator.isLength(number, { min: 8, max: 15 })) {
      setPhoneError('Please enter your phone number');
      setPhoneValid(false);
    }
  };

  const validateName = (name: string) => {
    if (!validator.isAlpha(name, 'en-US')) {
      setNameError('Please enter your name');
      setNameValid(false);
    } else {
      setNameError('');
      setNameValid(true);
    }
    if (!validator.isLength(name, { min: 2, max: 10 })) {
      setNameError('Please enter your name');
    }
  };

  const validateLastName = (lastName: string) => {
    if (!validator.isAlpha(lastName, 'en-US')) {
      setLastNameError('Please enter your last name');
      setLastNameValid(false);
    } else {
      setLastNameError('');
      setLastNameValid(true);
    }
    if (!validator.isLength(lastName, { min: 2, max: 10 })) {
      setLastNameError('Please enter your last name');
    }
  };
  const isDisabled =
    email &&
    !emailError &&
    phone &&
    !phoneError &&
    name &&
    !nameError &&
    lastName &&
    !lastNameError;
  return (
    <>
      <form className="border mt-6 rounded-2xl">
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
                  type={name}
                  placeholder="Your first name"
                  onChange={(e) => {
                    setName(e.target.value);
                    validateName(e.target.value);
                  }}
                />
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
                  type={lastName}
                  placeholder="Your last name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                    validateLastName(e.target.value);
                  }}
                />
              </div>
              <div>
                <div className="flex gap-1 mb-2 text-[14px] text-[#1A1A1A]">
                  <p>Company Name </p>
                  <p className="text-[#808080]">(optional)</p>
                </div>
                <input
                  className="border w-[302px] h-[49px] focus:outline-none rounded-[8px] pl-4"
                  type="name"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="pt-4">
              <p className="mb-2 text-[14px] text-[#1A1A1A]">Street Address</p>
              <input
                className="border w-[936px] h-[49px] focus:outline-none rounded-[8px] pl-4"
                type="text"
                placeholder="Street Address"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <div>
                <p className="mb-2 text-[14px] text-[#1A1A1A]">
                  Country / Region
                </p>
                <input
                  className="border w-[302px] h-[49px] focus:outline-none rounded-[8px] pl-4"
                  type="name"
                  placeholder="Select"
                />
              </div>
              <div>
                <p className="mb-2 text-[14px] text-[#1A1A1A]">States</p>
                <input
                  className="border w-[302px] h-[49px] focus:outline-none rounded-[8px] pl-4"
                  type="name"
                  placeholder="States"
                />
              </div>
              <div>
                <p className=" mb-2 text-[14px] text-[#1A1A1A]">Zip Code</p>
                <input
                  className="border w-[302px] h-[49px] focus:outline-none rounded-[8px] pl-4"
                  type="name"
                  placeholder="Zip code"
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
                  type={email}
                  placeholder="Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
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
                  type={phone}
                  placeholder="Phone number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                    validateNumber(e.target.value);
                  }}
                />
                {phoneError && (
                  <div className="text-red-500 mt-1">{phoneError}</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          disabled={Boolean(!isDisabled)}
          className="bg-[#00B307] w-[167px] h-[45px] rounded-full hover:bg-[#2C742F] ml-6 my-6"
        >
          <p className="text-white text-[14px] font-semibold">Save Changes</p>
        </button>
      </form>
    </>
  );
};
