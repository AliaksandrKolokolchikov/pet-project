import { Product } from '../../../types/types.tsx';
import Rating from '../../../assets/products/PopularProducts/Rating.svg';
import { CartWhite } from '../../Icons/Cart.tsx';

interface Props {
  product: Product;
}

export const HotDeals = ({ product }: Props) => {
  return (
    <>
      <div className="grid first:col-span-1 col-span-2 first:w-[525px] first:z-30  w-[230px] h-[325px]">
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
          <div className="ml-3">
            <img src={Rating} alt="Rating" />
          </div>
        </div>
      </div>
    </>
  );
};
