import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { RootState } from '../../../store';
import { CartItem } from './CartItem.tsx';

export const CartWrapper = () => {
  const navigate = useNavigate();
  const { products, price } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <div className="text-center font-semibold text-[32px] pt-10 pb-8 font-[Poppins]">
        My Shopping Cart
      </div>
      <div className="flex font-[Poppins]">
        <div className="mx-[3%]">
          <div className=" border border-gray-100 rounded-[10px] max-w-[872px] ">
            <div className="border-b max-w-[872px] h-[45px] pb-2 font-[Poppins] text-[#808080] text-[14px]">
              <div className="flex justify-between uppercase px-5 py-3">
                <span className="pr-[14%]">Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span className="pr-[12%]">Subtotal</span>
              </div>
            </div>
            {products.map((product, index) => (
              <CartItem key={index} product={product} />
            ))}
            <div className="max-w-[872px] h-[77px]">
              <div className="flex justify-between pt-4 px-5">
                <div className="group">
                  <button className="bg-[#F2F2F2] group-hover:bg-[#333333] w-[168px] h-[45px] rounded-full font-[Poppins]">
                    <Link to="/">
                      <p className="text-[14px] font-semibold text-[#4D4D4D] group-hover:text-white">
                        Return to shop
                      </p>
                    </Link>
                  </button>
                </div>

                <div className="group">
                  <button
                    onClick={() => navigate('/cart')}
                    className="bg-[#F2F2F2] group-hover:bg-[#333333] w-[151px] h-[45px] rounded-full font-[Poppins]"
                  >
                    <p className="text-[14px] font-semibold text-[#4D4D4D] group-hover:text-white">
                      Update Cart
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-[872px] h-[92px] mt-6 mb-20 border rounded-[10px] ">
            <div className="flex justify-between items-center px-[2%]">
              <p className="text-[20px] font-medium py-[31px] ">Coupon Code</p>
              <div className="border rounded-[30px] min-w-[668px] relative ">
                <input
                  className=" h-[52px] w-full focus:outline-none pl-6 rounded-[30px]"
                  type="email"
                  placeholder="Enter code"
                  name="email"
                  autoComplete="off"
                />
                <div className="group">
                  <button className="bg-[#333333] group-hover:bg-[#F2F2F2] rounded-[30px] min-w-[196px] h-[52px] absolute right-0 top-0">
                    <p className="font-semibold text-white group-hover:text-[#4D4D4D]">
                      Apply Coupon
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="min-w-[424px] max-h-[296px] border ml-6 rounded-[10px]">
          <div className="flex flex-col pl-6">
            <p className="text-[20px] font-medium pt-6">Cart Total</p>
            <div className="border-b max-w-[376px] mt-5 pb-3 flex justify-between items-center">
              <p className="text-[#4D4D4D] text-[14px]">Subtotal:</p>
              <p>{price}</p>
            </div>
            <div className="border-b max-w-[376px] mt-5 pb-3 flex justify-between items-center">
              <p className="text-[#4D4D4D] text-[14px]">Shipping:</p>
              <p className="text-[#1A1A1A] text-[14px]">Free</p>
            </div>
            <div className="max-w-[376px] mt-5 flex justify-between items-center">
              <p className="text-[#4D4D4D] text-[14px]">Total:</p>
              <p className="text-[#1A1A1A] text-[14px]">{price}</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            className="bg-[#00B307] hover:bg-[#2C742F] min-w-[376px] h-[51px] mx-6 mt-7 rounded-full"
          >
            <p className="text-white font-semibold">Proceed to checkout</p>
          </button>
        </aside>
      </div>
    </>
  );
};
