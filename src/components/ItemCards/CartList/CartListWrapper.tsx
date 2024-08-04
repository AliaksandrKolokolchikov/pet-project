import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { CartItem } from './CartItem.tsx';

export const CartWrapper = () => {
  const { products } = useSelector((state: RootState) => state.cart);
  return (
    <div className="p-4">
      <div className="flex justify-between border-b border-gray-300 pb-2 mb-4">
        <span className="font-bold w-1/4">Product</span>
        <span className="font-bold w-1/4 text-center">Price</span>
        <span className="font-bold w-1/4 text-center">Quantity</span>
        <span className="font-bold w-1/4 text-right">Subtotal</span>
      </div>
      {products.map((product, index) => (
        <CartItem key={index} product={product} />
      ))}
    </div>
  );
};
