import { useLocation, useNavigate } from 'react-router-dom';

import { HeaderLink } from './HeaderLink.tsx';
import { isSpecialRoute } from '../../utils.ts';
import { ROUTES } from '../../constants';

export const HeaderNavLink = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`${
        isSpecialRoute(location.pathname as ROUTES)
          ? `bg-white text-[#666666] hover:text-[#00B307]`
          : `bg-[bg-gray-800]`
      } flex justify-between items-center h-[60px] pl-[10%] pr-[10%] bg-gray-800 `}
    >
      <div className="flex items-center gap-1 poppins-nav">
        <button
          onClick={() => navigate('/')}
          className={`${
            isSpecialRoute(location.pathname as ROUTES)
              ? `hover:text-[#00B307]`
              : `hover:text-white `
          }  cursor-pointer`}
        >
          Home
        </button>

        <span onClick={() => navigate('/about')}>
          <HeaderLink> About Us</HeaderLink>
        </span>
        <div className="flex">
          <span onClick={() => navigate('/contact')}>
            <HeaderLink>Contact Us</HeaderLink>
          </span>
        </div>
      </div>
      <div className="flex gap-2 poppins-nav items-center">
        <div
          className={`${
            isSpecialRoute(location.pathname as ROUTES)
              ? `bg-phone-black w-[25px] h-[25px] bg-no-repeat flex justify-center`
              : `bg-phone-white w-[30px] h-[30px] `
          }`}
        ></div>
        <span
          className={`${
            isSpecialRoute(location.pathname as ROUTES)
              ? `hover:text-[#00B307] text-[#1A1A1A]`
              : `hover:text-white text-white`
          } cursor-pointer `}
        >
          (219) 555-014
        </span>
      </div>
    </div>
  );
};
