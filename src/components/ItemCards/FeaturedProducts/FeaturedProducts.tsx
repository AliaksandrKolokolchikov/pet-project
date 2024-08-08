import { Product } from '../../../types/types.tsx';

import { CartWhite } from '../../Icons/Products/Cart.tsx';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cart/cartSlicer.ts';
import { addToWish } from '../../../store/wish/wishSlicer.ts';

import Rating from '@mui/material/Rating';

interface Props {
  product: Product;
}

export const FeaturedProducts = ({ product }: Props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col justify-center max-w-[243px] max-h-[325px] border hover:border-[#2C742F] group cursor-pointer font-[Poppins]">
        <div className="relative group">
          <img className=" " src={product.image} alt="product" />
          <div className="group-hover:bg-no-repeat absolute top-[10px] left-[185px]">
            <a
              onClick={() => dispatch(addToWish(product))}
              className="group-hover:bg-addToWishList-bg absolute p-5"
            ></a>
          </div>
          <div className="group-hover:bg-no-repeat absolute top-[55px] left-[185px]">
            <a className="group-hover:bg-quickView-bg absolute p-5" href=""></a>
          </div>
        </div>

        <p className="text-[#4D4D4D] text-[14px] ml-3 group-hover:text-[#2C742F] ">
          {product.title}
        </p>
        <div className="flex justify-between">
          <p className="text-[#1A1A1A] font-medium ml-3 ">{product.price}</p>
          <div
            onClick={() => dispatch(addToCart(product))}
            className="rounded-full h-[34px] w-[34px] bg-[#F2F2F2] group-hover:bg-[#00B307] mr-3 flex items-center justify-center"
          >
            <CartWhite />
          </div>
        </div>
        <div className="ml-3">
          <Rating size="small" defaultValue={product.rating} />
        </div>
      </div>
    </>
  );
};
