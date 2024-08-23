import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';

import { ProductCart } from '../../../types/types.tsx';
import Brand from '../../../assets/AllCategories/Brand.svg';
import Facebook from '../../../assets/Footer/facebook 1.svg';
import Twitter from '../../../assets/Footer/twitter 1.svg';
import Pinterest from '../../../assets/Footer/pinterest 1.svg';
import Instagram from '../../../assets/Footer/instagram 1.svg';
import like from '../../../assets/AllCategories/likeAll.svg';
import { addToCartQuick } from '../../../store/cart/cartSlicer.ts';
import { CartWhite } from '../../Icons/Products/Cart.tsx';
import { addToWish } from '../../../store/wish/wishSlicer.ts';
import { useState } from 'react';

type Props = {
  product: ProductCart;
  onClose: (value: boolean) => void;
};

export const QuickViewPopUp = ({ product, onClose }: Props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <>
      <div className="flex">
        <div className="flex items-center ">
          <img
            className="min-w-[556px] min-h-[556px] mr-6"
            src={product.image}
            alt="product"
          />
        </div>
        <div className="flex flex-col pt-10 font-Poppins max-w-[568px]">
          <p className="text-[36px] font-semibold pb-[14px]">{product.title}</p>
          <div className="flex items-center">
            <Rating value={product.rating} size={'small'} readOnly={true} />
            <div className="flex gap-1 pl-1 text-[14px] text-[#666666]">
              <p>{Math.floor(Math.random() * 10) + 1}</p>
              <p>Review</p>
            </div>
            <p className="text-[#B3B3B3] px-3">&bull;</p>
            <div className="flex items-center text-[14px] gap-1">
              <p className="text-[#333333] font-medium">SKU:</p>
              <p className="text-[#666666]">
                {Math.floor(Math.random() * 10000) + 1}
              </p>
            </div>
          </div>
          <p className="pt-5 text-[#2C742F] font-medium text-[24px] border-b pb-5 w-[568px]">
            {product.price}
          </p>
          <div className="flex items-center  pt-6 gap-2 max-w-[568px] ">
            <p className="text-[14px]">Brand:</p>
            <div className="border">
              <img src={Brand} alt="Brand" />
            </div>
            <div className="flex items-center pl-[30%]">
              <p className="text-[14px]">Share item:</p>
              <div className="flex gap-[5px] pl-2 ">
                <a
                  target="_blank"
                  href="https://www.facebook.com/"
                  rel="noreferrer"
                >
                  <div className="bg-[#00B307] w-10 h-10 rounded-[30px] flex items-center justify-center">
                    <img src={Facebook} alt="Facebook" />
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://www.twitter.com/"
                  rel="noreferrer"
                >
                  <div className="hover:bg-[#00B307] w-10 h-10 rounded-[30px] flex items-center justify-center">
                    <img src={Twitter} alt="Twitter" />
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://www.pinterest.com/"
                  rel="noreferrer"
                >
                  <div className="hover:bg-[#00B307] w-10 h-10 rounded-[30px] flex items-center justify-center">
                    <img src={Pinterest} alt="Pinterest" />
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/ "
                  rel="noreferrer"
                >
                  <div className="hover:bg-[#00B307] w-10 h-10 rounded-[30px] flex items-center justify-center">
                    <img src={Instagram} alt="Instagram" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <p className="pt-[16px] text-[14px] text-[#808080] border-b pb-6">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
            ultrices et ipsum. Nulla varius magna a consequat pulvinar.
          </p>

          <div className="flex items-center pt-6">
            <div className="flex items-center justify-center rounded-full border max-w-[124px] max-h-[50px]">
              <button
                onClick={() => {
                  if (quantity !== 0) setQuantity(quantity - 1);
                }}
                className=" border rounded-full w-[34px] h-[34px] bg-gray-100 hover:bg-[#1A1A1A] hover:text-white "
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-10 text-center"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="border rounded-full w-[34px] h-[34px] bg-gray-100 hover:bg-[#1A1A1A] hover:text-white "
              >
                +
              </button>
            </div>

            <button className="bg-[#00B307] w-[371px] h-[45px] mx-3 hover:bg-[#2C742F] group rounded-full ">
              <div className="flex justify-center items-center ">
                <p
                  onClick={() => {
                    dispatch(addToCartQuick({ product, quantity }));
                    onClose(false);
                  }}
                  className="font-semibold text-[14px] text-white mr-3"
                >
                  Add to Cart
                </p>
                <CartWhite />
              </div>
            </button>

            <div>
              <img
                className="cursor-pointer"
                onClick={() => dispatch(addToWish(product))}
                src={like}
                alt="like"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
