import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../../assets/Header/Logo.svg';
import Search from '../../assets/Header/Search.svg';
import { RootState } from '../../store';
import { HeaderIcon } from '../Icons/Header/HeaderIcon.tsx';
import { HeartIcon } from '../Icons/Header/HeartIcon.tsx';
import { useOutsideClickListener } from '../../hooks';
import { PopUp } from './PopUp.tsx';

export const HeaderSearch = () => {
  const { ref, isShow, setIsShow } = useOutsideClickListener(false);
  const { price, countOfProducts } = useSelector(
    (state: RootState) => state.cart,
  );

  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center h-[93px] pl-[10%] pr-[10%]">
        <Link to="/">
          <div className="flex gap-[4.40px]">
            <img src={Logo} alt="Logo" />
            <span className="poppins-bl">Ecobazar</span>
          </div>
        </Link>
        <div className="flex  items-center border rounded-[10px] w-[400px] h-[45px] pt-3 pb-3 pl-[18px]">
          <img src={Search} alt="Search" className="block mr-1" />
          <div className="grow ml-1">
            <input
              className="w-full h-[42px] focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
              autoComplete="off"
            />
          </div>
          <div className="relative ">
            <button className=" rounded-r-[10px] bg-green-lime w-[98px] h-[45px] font-[600] hover:bg-[#2C742F]">
              <span className="text-white font-[Poppins] font-[600] text-[14px] leading-[120%] ">
                Search
              </span>
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="group">
            <div
              data-testid="wishlist-button"
              className="rounded-full bg-white h-[40px] w-[40px]  group-hover:bg-[#2C742F] mr-3 flex items-center justify-center cursor-pointer"
              onClick={() => navigate('/wishlist')}
            >
              <HeartIcon />
            </div>
          </div>
          <div className="pl-[16px] border-l-2">
            <div className="group">
              <div
                data-testid="cart-button"
                onClick={() => setIsShow(!isShow)}
                className="relative rounded-full bg-white h-[40px] w-[40px]  group-hover:bg-[#2C742F] mr-3 flex items-center justify-center cursor-pointer"
              >
                <HeaderIcon />
              </div>
              <span className="absolute mt-[-40px] ml-[22px] w-[18px] h-[18px] border-[50%] bg-dark-green rounded-2xl text-white text-center text-[13px]">
                {countOfProducts}
              </span>
            </div>
          </div>
          <span className="flex flex-col text-[11px] font-[Poppins] font-normal leading-[120%] ml-[12px]">
            Shopping cart:
            <span className="font-medium text-[14px] mt-[7px] text-black leading-[100%]">
              {price && price.length > 1 ? price : <span>0 $</span>}
            </span>
          </span>
        </div>
      </div>
      {isShow ? <PopUp setIsShow={setIsShow} ref={ref} /> : null}
    </>
  );
};
