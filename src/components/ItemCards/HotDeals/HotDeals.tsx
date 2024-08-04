import { Product } from '../../../types/types.tsx';
import { CartWhite } from '../../Icons/Cart.tsx';
import { MyTimer } from './TimerHotDeals.tsx';

import Rating from '@mui/material/Rating';

interface Props {
  product: Product;
}

export const HotDeals = ({ product }: Props) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 172800);

  if (product?.isLarge) {
    return (
      <>
        <div className="col-span-2 row-span-2 w-full h-full">
          <div className="flex flex-col justify-center border hover:border-[#2C742F] group cursor-pointer font-[Poppins]">
            <img src={product.image} alt="product" />
            <div className="flex px-6">
              <div className="bg-addToWishList-bg w-[46px] bg-no-repeat"></div>
              <button className="bg-[#00B307] w-[371px] h-[45px] mx-2 rounded-full">
                <div className="flex justify-center items-center">
                  <p className="font-semibold text-[14px] text-white mr-3">
                    Add to Cart
                  </p>
                  <CartWhite />
                </div>
              </button>
              <div className="bg-quickView-bg w-[46px] bg-no-repeat"></div>
            </div>
            <p className="text-[#4D4D4D] text-[18px] mt-[18px] text-center group-hover:text-[#2C742F]">
              {product.title}
            </p>
            <p className="text-[#1A1A1A] text-[24px] text-center font-medium ml-3 my-2">
              {product.price}
            </p>
            <div className="ml-3 flex justify-center items-center">
              <Rating size="small" defaultValue={product.rating} />
              <p className="text-[12px] text-[#808080]">(524 Feedback)</p>
            </div>
            <p className="text-center mt-4 mb-2 text-[#999999]">
              Hurry up! Offer ends In:
            </p>
            <MyTimer expiryTimestamp={time} />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <div className="flex flex-col w-full h-full justify-center border hover:border-[#2C742F] group cursor-pointer font-[Poppins]">
          <img src={product.image} alt="product" />
          <p className="text-[#4D4D4D] text-[14px] ml-3 group-hover:text-[#2C742F]">
            {product.title}
          </p>
          <div className="flex justify-between ">
            <p className="text-[#1A1A1A] font-medium ml-3 ">{product.price}</p>
            <div className="rounded-full h-[34px] w-[34px] bg-[#F2F2F2] group-hover:bg-[#00B307] mr-3 flex items-center justify-center">
              <CartWhite />
            </div>
          </div>
          <div className="ml-3 ">
            <Rating size="small" defaultValue={product.rating} />
          </div>
        </div>
      </div>
    );
  }
};
