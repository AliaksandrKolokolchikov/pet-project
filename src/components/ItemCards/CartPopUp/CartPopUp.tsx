import { useDispatch } from 'react-redux';

import { ProductCart } from '../../../types/types.tsx';
import { deleteFromCart } from '../../../store/cart/cartSlicer.ts';
import { Close } from '../../Icons/Products/Close.tsx';

type Props = {
  product: ProductCart;
};

export const CartPopUp = ({ product }: Props) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="border-b max-w-[375px] ml-10 pb-3 pt-3">
        <div className="flex items-center ">
          <img
            className="min-w-[100px] min-h-[100px] mr-2"
            src={product.image}
            alt="product"
          />
          <div className="min-w-[216px]">
            <p>{product.title}</p>
            <div className="flex gap-2 items-center">
              <p className="text-[14px] text-[#808080]">
                {product.quantity}kg x
              </p>
              <p>{product.price}</p>
            </div>
          </div>
          <div
            className="pl- group cursor-pointer "
            onClick={() => dispatch(deleteFromCart(product))}
          >
            <Close />
          </div>
        </div>
      </div>
    </>
  );
};
