import { useSelector } from 'react-redux';

import { RootState } from '../../../store';
import { WishListItem } from './WishListItem.tsx';
import Facebook from '../../../assets/Footer/facebook 1.svg';
import Twitter from '../../../assets/Footer/twitter 1.svg';
import Pinterest from '../../../assets/Footer/pinterest 1.svg';
import Instagram from '../../../assets/Footer/instagram 1.svg';

export const WishListWrapper = () => {
  const { products } = useSelector((state: RootState) => state.wish);

  return (
    <>
      <div className="text-center font-semibold text-[32px] pt-10 pb-8 font-[Poppins]">
        My Wishlist
      </div>
      <div className="flex font-[Poppins]">
        <div className="mx-[4%]">
          <div className=" border border-gray-100 rounded-[10px] min-w-[1320px] mb-20">
            <div className="border-b max-w-[1320px] h-[45px] pb-2 font-[Poppins] text-[#808080] text-[14px]">
              <div className="flex  uppercase px-5 py-3">
                <span>Product</span>
                <span className="pl-[445px] pr-[230px]">Price</span>
                <span>Stock Status</span>
              </div>
            </div>
            {products.map((product, index) => (
              <WishListItem key={index} product={product} />
            ))}
            <div>
              <div className="flex items-center pl-6 h-[88px]">
                <p>Share:</p>
                <div className="flex gap-[21px] pl-10 ">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/"
                    rel="noreferrer"
                  >
                    <div className="bg-[#00B307] w-10 h-10 rounded-[30px] flex items-center justify-center">
                      <img src={Facebook} alt="Facebook" />
                    </div>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.twitter.com/"
                    rel="noreferrer"
                  >
                    <div className="hover:bg-[#00B307] w-10 h-10 rounded-[30px] flex items-center justify-center">
                      <img src={Twitter} alt="Twitter" />
                    </div>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.pinterest.com/"
                    rel="noreferrer"
                  >
                    <div className="hover:bg-[#00B307] w-10 h-10 rounded-[30px] flex items-center justify-center">
                      <img src={Pinterest} alt="Pinterest" />
                    </div>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/ "
                    rel="noreferrer"
                  >
                    <div className="hover:bg-[#00B307] w-10 h-10 rounded-[30px] flex items-center justify-center">
                      <img src={Instagram} alt="Instagram" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
