import { ProductCart } from '../../../types/types.tsx';

type Props = {
  product: ProductCart;
};
export const CheckoutItem = ({ product }: Props) => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center px-[24px]">
          <div className="flex items-center">
            <img
              className="w-[60px] h-[60px]"
              src={product.image}
              alt="product"
            />
            <p className="ml-1.5 mr-3">{product.title}</p>
            <p>x{product.quantity}</p>
          </div>
          <p>{product.price}</p>
        </div>
      </div>
    </>
  );
};
