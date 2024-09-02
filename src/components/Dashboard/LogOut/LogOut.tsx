import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LogOut = () => {
  const [, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setUserEmail(null);
    navigate('/');
  };

  return (
    <>
      <div>Are u want to exit?</div>
      <button
        onClick={handleLogout}
        className="text-red-500 mx-4 hover:text-red-900 transition"
      >
        Sign Out
      </button>
    </>
  );
};
