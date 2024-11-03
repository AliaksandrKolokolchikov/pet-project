import { useState } from 'react';
import validator from 'validator';

export const useValidateForm = () => {
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
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [password, setPassword] = useState('');

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
      setPhoneError('Please enter a valid phone number');
      setPhoneValid(false);
    } else {
      setPhoneError('');
      setPhoneValid(true);
    }
    if (!validator.isLength(number, { min: 8, max: 15 })) {
      setPhoneError('Please enter a valid phone number');
      setPhoneValid(false);
    }
  };

  const validateName = (name: string) => {
    if (!validator.isLength(name, { min: 2, max: 10 })) {
      setNameError('Name should be between 2 and 10 characters');
      setNameValid(false);
    }
    if (!validator.isAlpha(name, 'en-US')) {
      setNameError('Please enter a valid name');
      setNameValid(false);
    } else {
      setNameError('');
      setNameValid(true);
    }
  };

  const validateLastName = (lastName: string) => {
    if (!validator.isAlpha(lastName, 'en-US')) {
      setLastNameError('Please enter a valid last name');
      setLastNameValid(false);
    } else {
      setLastNameError('');
      setLastNameValid(true);
    }
    if (!validator.isLength(lastName, { min: 2, max: 10 })) {
      setLastNameError('Last name should be between 2 and 10 characters');
      setLastNameValid(false);
    }
  };

  const validatePassword = (password: string) => {
    if (
      !validator.isLength(password, { min: 8 }) ||
      validator.isAlphanumeric(password)
    ) {
      setPasswordError(
        'Password must be at least 8 characters long and include special characters',
      );
    } else {
      setPasswordError('');
      setPasswordValid(true);
    }
  };

  const validatePasswordConfirm = (confirmPassword: string) => {
    if (confirmPassword !== password) {
      setConfirmPasswordError('Password mismatch');
      setPasswordValid(false);
    } else {
      setConfirmPasswordError('');
      setPasswordValid(true);
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
    password &&
    confirmPassword &&
    !lastNameError &&
    !passwordError &&
    !confirmPasswordError &&
    !emailError;

  return {
    email,
    setEmail,
    emailValid,
    setPhone,
    phoneValid,
    setName,
    nameValid,
    setLastName,
    nameError,
    lastNameError,
    emailError,
    phoneError,
    lastNameValid,
    validateEmail,
    validateNumber,
    validateName,
    validateLastName,
    isDisabled,
    validatePassword,
    validatePasswordConfirm,
    password,
    passwordError,
    passwordValid,
    setConfirmPassword,
    setPasswordError,
    setPassword,
    confirmPasswordError,
    setNameValid,
    setNameError,
    setLastNameValid,
    setPhoneValid,
    setEmailValid,
    setEmailError,
    setPasswordValid,
    setConfirmPasswordError,
    confirmPassword,
  };
};
