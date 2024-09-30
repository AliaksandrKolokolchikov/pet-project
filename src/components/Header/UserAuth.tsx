import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useUserInfo } from '../../hooks';

export const UserAuth = () => {
  const [initialEmail, setInitialEmail] = useState<string | null>(null);
  const [updatedEmail, setUpdatedEmail] = useState<string | null>(null);
  const [avatarImage, setAvatarImage] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!sessionStorage.getItem('isAuth') || false,
  );
  const { userInfo } = useUserInfo();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('updatedEmail');
    sessionStorage.removeItem('isAuth');
    setInitialEmail(null);
    setUpdatedEmail(null);
    setIsAuthenticated(false);
    navigate('/');
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    const savedUpdatedEmail = localStorage.getItem('updatedEmail');
    const savedImage = sessionStorage.getItem('avatar');

    if (!initialEmail && savedEmail) {
      setInitialEmail(savedEmail);
    }

    if (savedUpdatedEmail) {
      setUpdatedEmail(savedUpdatedEmail);
    }

    if (savedImage) {
      setAvatarImage(savedImage);
    }
  }, [initialEmail]);

  useEffect(() => {
    if (isAuthenticated && userInfo.email) {
      if (!initialEmail) {
        setInitialEmail(userInfo.email);
        localStorage.setItem('userEmail', userInfo.email);
      }
      if (userInfo.email !== updatedEmail) {
        setUpdatedEmail(userInfo.email);
        localStorage.setItem('updatedEmail', userInfo.email);
      }
    }
  }, [userInfo.email, isAuthenticated, initialEmail, updatedEmail]);

  const renderAvatar = () => {
    return avatarImage ? (
      <img
        src={avatarImage}
        alt="User Avatar"
        className="w-[35px] h-[35px] rounded-full object-cover mr-3"
      />
    ) : (
      <div className="w-[35px] h-[35px] rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-center text-[8px]">
        No Image
      </div>
    );
  };

  const displayedEmail = isAuthenticated ? initialEmail || updatedEmail : null;

  const renderAuthButtons = () => {
    if (isAuthenticated && displayedEmail) {
      return (
        <div className="flex gap-1 items-center">
          {renderAvatar()}
          <span
            onClick={() => navigate('/dashboard')}
            className="text-[#00B307] hover:text-[#2C742F] cursor-pointer transition"
          >
            {displayedEmail}
          </span>
          <button
            onClick={handleLogout}
            className="text-red-500 mx-4 hover:text-red-900 transition"
          >
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex gap-1">
          <button
            className="hover:text-green-400"
            onClick={() => navigate('/signin')}
          >
            Sign In
          </button>
          <span className="pl-1 pr-1">/</span>
          <button
            className="hover:text-green-400"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
        </div>
      );
    }
  };

  return <>{renderAuthButtons()}</>;
};
