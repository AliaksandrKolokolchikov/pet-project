import { Product } from '../../../types/types.tsx';
import { CartWhite } from '../../Icons/Products/Cart.tsx';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cart/cartSlicer.ts';
import { addToWish } from '../../../store/wish/wishSlicer.ts';

interface Props {
  product: Product;
}

export const PopularProducts = ({ product }: Props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col justify-center w-[243px] h-[325px] border hover:border-[#2C742F] group cursor-pointer  font-[Poppins] ">
        <div className="relative group">
          <img src={product.image} alt="product" />
          <div className="group-hover:bg-no-repeat absolute top-[5px] left-[185px]">
            <a
              onClick={() => dispatch(addToWish(product))}
              className="group-hover:bg-addToWishList-bg absolute p-5 hover:bg-"
            ></a>
          </div>
          <div className="group-hover:bg-no-repeat absolute top-[50px] left-[185px]">
            <a className="group-hover:bg-quickView-bg absolute p-5"></a>
          </div>
        </div>

        <p className="text-[#4D4D4D] text-[14px] ml-3 group-hover:text-[#2C742F]">
          {product.title}
        </p>
        <div className="flex justify-between ">
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
