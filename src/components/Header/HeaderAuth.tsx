import { useNavigate } from 'react-router-dom';

import Map from '../../assets/Header/Map Pin.svg';
import Arrow from '../../assets/Header/Arrow down.svg';
import { isSpecialRoute } from '../../utils.ts';
import { useEffect, useState } from 'react';

export const HeaderAuth = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [avatarImage, setAvatarImage] = useState<string | null>(null);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setUserEmail(null);
  };

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    }
  }, []);

  useEffect(() => {
    const savedImage = localStorage.getItem('avatar');
    if (savedImage) {
      setAvatarImage(savedImage);
    }
  }, []);

  return (
    <>
      <div
        className={`${
          isSpecialRoute(location.pathname)
            ? `bg-[#333333] text-[#B3B3B3]`
            : `bg-white`
        } flex justify-between items-center border-b-2 h-[42px] pl-[10%] pr-[10%] poppins-md`}
      >
        <div className="flex gap-2  items-center">
          <img src={Map} alt="Your location" />
          <div>Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
        </div>
        <div className="flex gap-1.5 items-center">
          <span className="hover:text-green-400 cursor-pointer">Eng</span>
          <button>
            <img src={Arrow} alt="Arrow down" />
          </button>
          <span className="hover:text-green-400 cursor-pointer">USD</span>
          <button>
            <img className="pr-4" src={Arrow} alt="Arrow down" />
          </button>
          {avatarImage ? (
            <img
              src={avatarImage}
              alt="User Avatar"
              className="w-[35px] h-[35px] rounded-full object-cover"
            />
          ) : (
            <div className="w-[35px] h-[35px] rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-center text-[8px]">
              No Image
            </div>
          )}
          {userEmail ? (
            <div className="flex gap-1 items-center">
              <span
                onClick={() => navigate('/dashboard')}
                className="text-[#00B307] hover:text-[#2C742F] cursor-pointer transition"
              >
                {userEmail}
              </span>
              <button
                onClick={handleLogout}
                className="text-red-500 mx-4 hover:text-red-900 transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex gap-1">
              <button
                className="hover:text-green-400"
                onClick={() => {
                  navigate('/signin');
                }}
              >
                Sign in
              </button>
              <span className="pl-1 pr-1">/</span>
              <button
                className="hover:text-green-400"
                onClick={() => {
                  navigate('/signup');
                }}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
