import { Product } from '../../../types/types.tsx';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cart/cartSlicer.ts';
import { removeFromWish } from '../../../store/wish/wishSlicer.ts';
import { Close } from '../../Icons/Products/Close.tsx';

type Props = {
  product: Product;
};

export const WishListItem = ({ product }: Props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-between items-center border-b border-gray-200 py-2 mx-[2%] min-h-[124px] max-w-[1272px] font-[Poppins]">
        <div className="flex items-center">
          <img
            src={product.image}
            alt="product"
            className="max-w-[100px] max-h-[100px] mr-4 my-3"
          />
          <span className="min-w-[150px]">{product.title}</span>
        </div>
        <span className="text-center">{product.price}</span>

        <div className="min-w-[71px] min-h-[29px] bg-[#20B52633] flex items-center justify-center">
          <p className="text-[14px] text-[#2C742F]">In Stock</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="min-w-[146px] min-h-[45px] bg-[#00B307] rounded-full hover:bg-[#2C742F]"
          >
            <p className="text-[14px] font-semibold text-white ">Add to Cart</p>
          </button>
          <div
            className="flex gap-4 items-center group cursor-pointer"
            onClick={() => dispatch(removeFromWish(product))}
          >
            <Close />
          </div>
        </div>
      </div>
    </>
  );
};
