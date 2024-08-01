import { Product } from '../../../types/types.tsx';
import { CartWhite } from '../../Icons/Cart.tsx';
import { Rating } from 'react-simple-star-rating';

interface Props {
  product: Product;
}

export const HotDeals = ({ product }: Props) => {
  if (product?.isLarge) {
    return (
      <>
        <div className="col-span-2 row-span-2 w-[528px] h-[654px]">
          <div className="flex flex-col  justify-center border hover:border-[#2C742F] group cursor-pointer font-[Poppins]">
            <img src={product.image} alt="product" />
            <p className="text-[#4D4D4D] text-[14px] ml-3 group-hover:text-[#2C742F]">
              {product.title}
            </p>
            <div className="flex justify-between ">
              <p className="text-[#1A1A1A] font-medium ml-3 ">
                {product.price}
              </p>
              <div className="rounded-full h-[34px] w-[34px] bg-[#F2F2F2] group-hover:bg-[#00B307] mr-3 flex items-center justify-center">
                <CartWhite />
              </div>
            </div>
            <div className="ml-3">
              <Rating readonly initialValue={product.rating} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <div className="flex flex-col  justify-center border hover:border-[#2C742F] group cursor-pointer font-[Poppins]">
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
          <div className="ml-3 flex">
            <Rating initialValue={product.rating} readonly />
          </div>
        </div>
      </div>
    );
  }
};
