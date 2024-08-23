import { useDispatch } from 'react-redux';
import Rating from '@mui/material/Rating';

import { ProductCart } from '../../../types/types.tsx';
import { CartWhite } from '../../Icons/Products/Cart.tsx';
import { addToCart } from '../../../store/cart/cartSlicer.ts';
import { addToWish } from '../../../store/wish/wishSlicer.ts';
import { LikeProduct } from '../../Icons/Products/LikeProduct.tsx';
import { QuickView } from '../../Icons/Products/QuickView.tsx';
import { useOutsideClickListener } from '../../../hooks';
import { QuickViewPopUpWrapper } from '../QuickViewPopUp';

interface Props {
  product: ProductCart;
}

export const FeaturedProducts = ({ product }: Props) => {
  const dispatch = useDispatch();
  const { ref, isShow, setIsShow } = useOutsideClickListener(false);

  return (
    <>
      <div className="flex flex-col justify-center max-w-[243px] max-h-[325px] border hover:border-[#2C742F] group cursor-pointer font-[Poppins]">
        <div className="relative group">
          <img className=" " src={product.image} alt="product" />
          <div className="absolute top-[10px] left-[185px] flex flex-col">
            <div>
              <LikeProduct
                onClick={() => dispatch(addToWish(product))}
                cssClass="mb-1 width-[40px] height-[40px] hidden group-hover:block group"
              ></LikeProduct>
            </div>
            <QuickView
              onClick={() => setIsShow(!isShow)}
              cssClass="mb-1 width-[40px] height-[40px] hidden group-hover:block group"
            />
          </div>
        </div>

        <p className="text-[#4D4D4D] text-[14px] ml-3 group-hover:text-[#2C742F]">
          {product.title}
        </p>
        <div className="flex justify-between">
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
      {isShow ? (
        <QuickViewPopUpWrapper
          product={product}
          setIsShow={setIsShow}
          ref={ref}
        />
      ) : null}
    </>
  );
};
