import { ProductCart } from '../../../types/types.tsx';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../store/cart/cartSlicer.ts';

type Props = {
  product: ProductCart;
};

export const CartItem = ({ product }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-2">
      <div className="flex items-center w-1/4">
        <img
          src={product.image}
          alt={product.title}
          className="w-16 h-16 mr-4"
        />
        <span>{product.title}</span>
      </div>
      <span className="w-1/4 text-center">{product.price}</span>
      <div className="flex items-center w-1/4 justify-center">
        <button
          onClick={() => dispatch(removeFromCart(product))}
          className="p-2 border rounded-l-md bg-gray-100"
        >
          -
        </button>
        <input
          type="text"
          value={product.quantity}
          readOnly
          className="w-8 text-center border-t border-b border-gray-300"
        />
        <button
          onClick={() => dispatch(addToCart(product))}
          className="p-2 border rounded-r-md bg-gray-100"
        >
          +
        </button>
      </div>
      <span className="w-1/4 text-right">{product.subtotal}</span>
    </div>
  );
};
