import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Logo from '../../assets/Header/Logo.svg';
import Search from '../../assets/Header/Search.svg';
import { RootState } from '../../store';
import { HeaderIcon } from '../Icons/Header/HeaderIcon.tsx';
import { HeartIcon } from '../Icons/Header/HeartIcon.tsx';
import { useOutsideClickListener } from '../../hooks';
import { PopUp } from './PopUp.tsx';
import { AllCategoriesCard } from '../../constants/CARD_LIST.ts';

export const HeaderSearch = () => {
  const { ref, isShow, setIsShow } = useOutsideClickListener(false);
  const [search, setSearch] = useState('');
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
              type="text"
              name="search"
              placeholder="Search"
              autoComplete="off"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          <div className="relative ">
            <button className=" rounded-r-[10px] bg-green-lime w-[98px] h-[45px] font-[600] hover:bg-[#2C742F]">
              <span className="text-white font-[Poppins] font-[600] text-[14px] leading-[120%] ">
                Search
              </span>
            </button>
          </div>
          {search && (
            <div className="absolute top-[7rem] left-[32rem] w-[295px] bg-white">
              {AllCategoriesCard.filter((product) =>
                product.title.includes(search),
              ).length > 0 ? (
                AllCategoriesCard.filter((product) =>
                  product.title.includes(search),
                ).map((product, index) => (
                  <div
                    className="border-b max-w-[375px] p-5 pb-3 pt-3 cursor-pointer hover:border-[#2C742F]"
                    key={product.title + index}
                    onClick={() => navigate('/all-categories')}
                  >
                    <div className="flex items-center">
                      <img
                        className="min-w-[100px] min-h-[100px] mr-2"
                        src={product.image}
                        alt="product"
                      />
                      <div className="min-w-[216px]">
                        <p>{product.title}</p>
                        <div className="flex gap-2 items-center">
                          <p>{product.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-5 text-gray-500">No results found</div>
              )}
            </div>
          )}
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
              {price}
            </span>
          </span>
        </div>
      </div>
      {isShow ? <PopUp setIsShow={setIsShow} ref={ref} /> : null}
    </>
  );
};
