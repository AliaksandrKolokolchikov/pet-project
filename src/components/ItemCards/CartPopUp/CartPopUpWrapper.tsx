import { useSelector } from 'react-redux';

import { RootState } from '../../../store';
import { CartPopUp } from './CartPopUp.tsx';

export const CartPopUpWrapper = () => {
  const { products } = useSelector((state: RootState) => state.cart);

  return (
    <>
      {products.map((product, index) => (
        <CartPopUp key={index} product={product} />
      ))}
    </>
  );
};
