import { useSelector } from 'react-redux';
import { useState } from 'react';
import validator from 'validator';

import { RootState } from '../../../store';
import { CheckoutItem } from './CheckoutItem.tsx';

export const CheckoutWrapper = () => {
  const { products, price } = useSelector((state: RootState) => state.cart);

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
      <div className="flex font-[Poppins] pt-8 px-[4%] mb-20">
        <div className="flex flex-col">
          <p className="font-medium text-[24px] text-[#1A1A1A] mb-5">
            Billing Information
          </p>

          <div className="flex gap-4">
            <div>
              <p className="mb-2 text-[14px] text-[#1A1A1A]"> First name</p>
              <input
                className={`border w-[280px] h-[49px] focus:outline-none rounded-[8px] pl-4 ${
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
                className={`border w-[280px] h-[49px] focus:outline-none rounded-[8px] pl-4 ${
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
                className="border w-[280px] h-[49px] focus:outline-none rounded-[8px] pl-4"
                type="name"
                placeholder="Company name"
              />
            </div>
          </div>

          <div className="pt-4">
            <p className="mb-2 text-[14px] text-[#1A1A1A]">Street Address</p>
            <input
              className="border w-[872px] h-[49px] focus:outline-none rounded-[8px] pl-4"
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
                className="border w-[280px] h-[49px] focus:outline-none rounded-[8px] pl-4"
                type="name"
                placeholder="Select"
              />
            </div>
            <div>
              <p className="mb-2 text-[14px] text-[#1A1A1A]">States</p>
              <input
                className="border w-[280px] h-[49px] focus:outline-none rounded-[8px] pl-4"
                type="name"
                placeholder="States"
              />
            </div>
            <div>
              <p className=" mb-2 text-[14px] text-[#1A1A1A]">Zip Code</p>
              <input
                className="border w-[280px] h-[49px] focus:outline-none rounded-[8px] pl-4"
                type="name"
                placeholder="Zip code"
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <div>
              <p className="mb-2 text-[14px] text-[#1A1A1A]">Email</p>
              <input
                className={`border w-[428px] h-[49px] focus:outline-none rounded-[8px] pl-4 ${
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
                className={`border w-[428px] h-[49px] focus:outline-none rounded-[8px] pl-4 ${
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

          <div className="flex items-center gap-2 pt-5  border-b pb-8">
            <input type="checkbox" />
            <p className="text-[#4D4D4D] text-[14px]">
              Ship to a different address
            </p>
          </div>

          <div>
            <p className="text-[24px] font-medium pt-8">Additional Info</p>
            <p className="text-[14px] pt-5 pb-2">Order Notes (Optional)</p>
            <textarea
              className="border w-[872px] h-[100px] focus:outline-none rounded-[8px] pl-4 pt-0"
              placeholder="Notes about your order, e.g. special notes for delivery"
            />
          </div>
        </div>

        <aside className="flex flex-col min-w-[432px] min-h-[580px] border rounded ml-6">
          <p className="text-[20px] font-medium pl-6 pt-6">Order Summery</p>
          {products.map((product) => (
            <CheckoutItem key={product.id} product={product} />
          ))}

          <div className="pl-6">
            <p className="text-[20px] font-medium pt-6">Cart Total</p>
            <div className="border-b max-w-[376px] mt-5 pb-3 flex justify-between items-center">
              <p className="text-[#4D4D4D] text-[14px]">Subtotal:</p>
              <p>{price}</p>
            </div>
            <div className="border-b max-w-[376px] mt-5 pb-3 flex justify-between items-center">
              <p className="text-[#4D4D4D] text-[14px]">Shipping:</p>
              <p className="text-[#1A1A1A] text-[14px]">Free</p>
            </div>
            <div className="max-w-[376px] mt-5 flex justify-between items-center">
              <p className="text-[#4D4D4D] text-[14px]">Total:</p>
              <p className="text-[#1A1A1A] text-[14px]">{price}</p>
            </div>
          </div>

          <div className="flex flex-col pl-6 pt-6 text-[14px] text-[#4D4D4D]">
            <p className="text-[20px] font-medium mb-4">Payment Method</p>
            <div className="flex gap-2 mb-[10px]">
              <input className="bg-green-500" type="radio" id="defaultCheck1" />
              <label htmlFor="defaultCheck1">Cash on Delivery</label>
            </div>
            <div className="flex gap-2 mb-[10px]">
              <input className="bg-green-500" type="radio" id="defaultCheck1" />
              <label htmlFor="defaultCheck1">Paypal</label>
            </div>
            <div className="flex gap-2 mb-6">
              <input type="radio" id="defaultCheck1" />
              <label htmlFor="defaultCheck1">Amazon Pay</label>
            </div>
            <button
              disabled={Boolean(!isDisabled)}
              className="bg-[#00B307] hover:bg-[#2C742F] w-[376px] h-[51px] px-6 rounded-full disabled:bg-[#2C742F33] disabled:text-[#2C742F]"
            >
              <p className="font-semibold text-white">Place Order</p>
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};
