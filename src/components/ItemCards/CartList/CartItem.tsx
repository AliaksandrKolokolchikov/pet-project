import { ProductCart } from '../../../types/types.tsx';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from '../../../store/cart/cartSlicer.ts';
import { Close } from '../../Icons/Products/Close.tsx';

type Props = {
  product: ProductCart;
};

export const CartItem = ({ product }: Props) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-between items-center border-b border-gray-200 py-2 mx-[2%] max-w-[832px]">
        <div className="flex items-center w-1/4">
          <img src={product.image} alt="product" className="w-16 h-16 mr-4" />
          <span>{product.title}</span>
        </div>
        <span className="w-1/4 text-center">{product.price}</span>
        <div className="flex items-center justify-center rounded-full border min-w-[124px] min-h-[50px]">
          <button
            onClick={() => dispatch(removeFromCart(product))}
            className=" border rounded-full w-[34px] h-[34px] bg-gray-100 hover:bg-[#1A1A1A] hover:text-white "
          >
            -
          </button>
          <input
            type="text"
            value={product.quantity}
            readOnly
            className="w-10 text-center "
          />
          <button
            onClick={() => dispatch(addToCart(product))}
            className="border rounded-full w-[34px] h-[34px] bg-gray-100 hover:bg-[#1A1A1A] hover:text-white "
          >
            +
          </button>
        </div>
        <span className="pl-[62px] pr-[72px]">{product.subtotal}</span>
        <div
          className="flex gap-4 items-center group cursor-pointer"
          onClick={() => dispatch(deleteFromCart(product))}
        >
          <Close />
        </div>
      </div>
    </>
  );
};
