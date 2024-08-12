import { useLocation, useNavigate } from 'react-router-dom';
import Arrow from '../../assets/Header/Arrow down.svg';
import { Link } from './Link.tsx';

export const HeaderNavLink = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      className={`${
        location.pathname === '/cart' ||
        location.pathname === '/wishlist' ||
        location.pathname === '/checkout' ||
        location.pathname === '/about' ||
        location.pathname === '/contact'
          ? `bg-white text-[#666666] hover:text-[#00B307]`
          : `bg-[bg-gray-800]`
      } flex justify-between items-center h-[60px] pl-[10%] pr-[10%] bg-gray-800 `}
    >
      <div className="flex items-center gap-1 poppins-nav">
        <button
          className={`${
            location.pathname === '/cart' ||
            location.pathname === '/wishlist' ||
            location.pathname === '/checkout' ||
            location.pathname === '/about' ||
            location.pathname === '/contact'
              ? `hover:text-[#00B307]`
              : `hover:text-white `
          }  cursor-pointer`}
        >
          Home
        </button>
        <button>
          <img src={Arrow} alt="Arrow down" />
        </button>
        <div className="flex gap-1">
          <Link>Home</Link>
          <button>
            <img src={Arrow} alt="Arrow down" />
          </button>
        </div>
        <div className="flex gap-1">
          <Link>Pages</Link>
          <button>
            <img src={Arrow} alt="Arrow down" />
          </button>
        </div>
        <div className="flex gap-1">
          <span>
            <Link>Blog</Link>
          </span>
          <button>
            <img src={Arrow} alt="Arrow down" />
          </button>
        </div>
        <span onClick={() => navigate('/about')}>
          <Link> About Us</Link>
        </span>
        <div className="flex">
          <span onClick={() => navigate('/contact')}>
            <Link>Contact Us</Link>
          </span>
        </div>
      </div>
      <div className="flex gap-2 poppins-nav items-center">
        <div
          className={`${
            location.pathname === '/cart' ||
            location.pathname === '/wishlist' ||
            location.pathname === '/checkout' ||
            location.pathname === '/about' ||
            location.pathname === '/contact'
              ? `bg-phone-black w-[25px] h-[25px] bg-no-repeat flex justify-center`
              : `bg-phone-white w-[30px] h-[30px] `
          }`}
        ></div>
        <span
          className={`${
            location.pathname === '/cart' ||
            location.pathname === '/wishlist' ||
            location.pathname === '/checkout' ||
            location.pathname === '/about' ||
            location.pathname === '/contact'
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
