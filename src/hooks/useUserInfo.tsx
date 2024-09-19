import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('userBillingInfo', JSON.stringify(userInfo));
  };

  const handleUserInfo = () => {
    const storeUserInfo = sessionStorage.getItem('userBillingInfo');
    if (storeUserInfo) {
      const savedUserInfo = JSON.parse(storeUserInfo);
      setUserInfo(savedUserInfo);
    }
  };

  useEffect(() => {
    handleUserInfo();
  }, []);

  return {
    userInfo,
    handleInputChange,
    handleSubmit,
    handleUserInfo,
  };
};
