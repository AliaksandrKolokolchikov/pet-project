import { FormEvent, useEffect, useRef, useState } from 'react';

import { useUserInfo } from './useUserInfo.tsx';
import { updateUserEmail } from '../db.ts';
import { useNotification } from './useNotification.tsx';

interface InitialValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const useBillingSetting = (
  email: string,
  isEmailValid: boolean,
  isPhoneValid: boolean,
  isNameValid: boolean,
  isLastNameValid: boolean,
) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const isInitialized = useRef(false);
  const [addressName, setAddressName] = useState('');
  const [componentName, setComponentName] = useState('');
  const [states, setStates] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [initialValues, setInitialValues] = useState<InitialValues>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const { userInfo, handleSubmit, handleInputChange } = useUserInfo();
  const { notifyIsSuccess, notifyIsNot } = useNotification();

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

  const hasChanges = (): boolean => {
    return (
      (userInfo.firstName !== initialValues.firstName && isNameValid) ||
      (userInfo.lastName !== initialValues.lastName && isLastNameValid) ||
      (userInfo.email !== initialValues.email && isEmailValid) ||
      (userInfo.phone !== initialValues.phone && isPhoneValid)
    );
  };

  useEffect(() => {
    setIsButtonDisabled(!hasChanges());
  }, [userInfo, initialValues]);

  const handleFormSubmit = async (e: FormEvent) => {
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

  const address = userInfo.address && addressName;

  return {
    isInitialized,
    handleFormSubmit,
    setInitialValues,
    initialValues,
    setIsButtonDisabled,
    isButtonDisabled,
    addressName,
    setAddressName,
    componentName,
    setComponentName,
    address,
    states,
    setStates,
    country,
    setCountry,
    zipCode,
    setZipCode,
    userInfo,
    handleInputChange,
  };
};
