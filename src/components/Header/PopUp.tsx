import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Close } from '../Icons/Products/Close.tsx';
import { CartPopUpWrapper } from '../ItemCards/CartPopUp/CartPopUpWrapper.tsx';
import { RootState } from '../../store';

type Props = {
  setIsShow: (value: boolean) => void;
  ref: React.RefObject<HTMLDivElement>;
};

export const PopUp = ({ setIsShow, ref }: Props) => {
  const navigate = useNavigate();
  const { price, countOfProducts } = useSelector(
    (state: RootState) => state.cart,
  );
  return (
    <>
      <div className="justify-end items-center  flex overflow-x-hidden touch-none fixed inset-0 z-50 outline-none focus:outline-none font-Poppins top-0">
        <div
          ref={ref}
          className="border-0 rounded-lg shadow-lg absolute top-0 min-w-[456px] min-h-[1080px] bg-white outline-none focus:outline-none"
        >
          <div className="flex justify-between">
            <div className="flex text-[20px] font-medium pl-10 pt-10 pb-5 gap-3">
              <p>Shopping Card</p>
              <p>({countOfProducts})</p>
            </div>
            <div
              className="flex pr-[50px] pt-10 pb-5 group cursor-pointer"
              onClick={() => setIsShow(false)}
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
              <div className="group">
                <button
                  onClick={() => navigate('/cart')}
                  className="min-w-[376px] min-h-[51px] rounded-full bg-[#56AC591A] group-hover:bg-[#00B307] mb-10"
                >
                  <p className="text-[#00B307] font-semibold group-hover:text-white">
                    Shopping Cart
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-70 fixed inset-0 z-40 bg-[#000000]"></div>
    </>
  );
};
