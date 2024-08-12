import Map from '../../assets/Header/Map Pin.svg';
import Arrow from '../../assets/Header/Arrow down.svg';
import { useLocation, useNavigate } from 'react-router-dom';

export const HeaderAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`${
          location.pathname === '/cart' ||
          location.pathname === '/wishlist' ||
          location.pathname === '/checkout' ||
          location.pathname === '/aboutUs' ||
          location.pathname === '/contact'
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
          <div className="flex gap-1  ">
            <button
              className="hover:text-green-400"
              onClick={() => {
                navigate('/signin');
              }}
            >
              Sign In
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
        </div>
      </div>
    </>
  );
};
