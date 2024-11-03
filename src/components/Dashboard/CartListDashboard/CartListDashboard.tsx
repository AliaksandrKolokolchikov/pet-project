import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { RootState } from '../../../store';
import { CartItem } from '../../ItemCards';

export const CartListDashboard = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <div className="text-center font-semibold text-[32px] pt-10 pb-8 font-[Poppins]">
        My Shopping Cart
      </div>
      <div className="flex flex-col font-[Poppins]">
        <div className=" border border-gray-100 rounded-[10px] w-full ">
          <div className="border-b w-full h-[45px] pb-2 font-[Poppins] text-[#808080] text-[14px]">
            <div className="flex justify-between uppercase px-5 py-3">
              <span className="pr-[17%]">Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span className="pr-[12%]">Subtotal</span>
            </div>
          </div>
          {products.map((product, index) => (
            <CartItem key={index} product={product} />
          ))}
          <div className="w-full h-[77px]">
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
        <div className="w-full h-[92px] mt-6 mb-20 border rounded-[10px] ">
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
    </>
  );
};
