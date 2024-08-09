import Logo from '../../assets/Header/Logo.svg';
import Search from '../../assets/Header/Search.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { HeaderIcon } from '../Icons/Header/HeaderIcon.tsx';
import { HeartIcon } from '../Icons/Header/HeartIcon.tsx';
import { useState } from 'react';
import { CartPopUpWrapper } from '../ItemCards/CartPopUp/CartPopUpWrapper.tsx';
import { Close } from '../Icons/Products/Close.tsx';

export const HeaderSearch = () => {
  const [showModal, setShowModal] = useState(false);
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
              className="rounded-full bg-white h-[40px] w-[40px]  group-hover:bg-[#2C742F] mr-3 flex items-center justify-center cursor-pointer"
              onClick={() => navigate('/wishlist')}
            >
              <HeartIcon />
            </div>
          </div>
          <div className="pl-[16px] border-l-2">
            <div className="group">
              <div
                onClick={() => setShowModal(true)}
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
              {price}
            </span>
          </span>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-end items-center  flex overflow-x-hidden  fixed inset-0 z-50 outline-none focus:outline-none font-Poppins top-0">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg absolute top-0 min-w-[456px] min-h-[1080px] bg-white outline-none focus:outline-none">
              <div className="flex justify-between">
                <div className="flex text-[20px] font-medium pl-10 pt-10 pb-5 gap-3">
                  <p>Shopping Card</p>
                  <p>({countOfProducts})</p>
                </div>
                <div
                  className="flex pr-[50px] pt-10 pb-5 group cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  <Close />
                </div>
              </div>
              <CartPopUpWrapper />
              <div className=" px-10 pt-12">
                <div className="flex justify-between">
                  <div className="flex gap-2 mb-6">
                    <p>{countOfProducts}</p>
                    <p>Product</p>
                  </div>
                  <div>{price}</div>
                </div>
                <div className="flex flex-col gap-y-4">
                  <button
                    onClick={() => navigate('/checkout')}
                    className="min-w-[376px] min-h-[51px] rounded-full bg-[#00B307] hover:bg-[#2C742F]"
                  >
                    <p className="text-white font-semibold">Checkout</p>
                  </button>
                  <button
                    onClick={() => navigate('/cart')}
                    className="min-w-[376px] min-h-[51px] rounded-full bg-[#56AC591A] hover:bg-[#00B307] mb-10"
                  >
                    <p className="text-[#00B307] font-semibold hover:text-white">
                      Shopping Cart
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-[#000000]"></div>
        </>
      ) : null}
    </>
  );
};
