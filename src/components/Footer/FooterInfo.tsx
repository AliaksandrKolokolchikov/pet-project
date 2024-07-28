import Logo from '../../assets/Header/Logo.svg';
import ApplePay from '../../assets/Footer/ApplePay.svg';
import Visa from '../../assets/Footer/Visa.svg';
import Discover from '../../assets/Footer/Discover.svg';
import MasterCard from '../../assets/Footer/Mastercard.svg';
import Secure from '../../assets/Footer/Cart.svg';
import { Link } from 'react-router-dom';

export const FooterInfo = () => {
  return (
    <div className="bg-[#1A1A1A] h-[368px] w-full font-[Poppins]">
      <div className="pl-[10%] pr-[15%] pt-[60px] flex items-center justify-between">
        <div className="flex flex-col">
          <div>
            <Link to="/">
              <div className="flex gap-2 mb-[16px]">
                <img src={Logo} alt="Logo" />
                <span className="text-white text-[32px] font-medium">
                  Ecobazar
                </span>
              </div>
            </Link>
            <div className="text-[#808080] w-[336px] mb-[22px] text-[14px]">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </div>
          </div>
          <div className="flex gap-4 text-[14px]">
            <span className="font-medium text-white underline underline-offset-8  decoration-[#00B307] hover:decoration-blue-400 cursor-pointer">
              (219) 555-0114
            </span>
            <span className="text-[#808080]">or</span>
            <span className="font-medium text-white underline underline-offset-8  decoration-[#00B307] hover:decoration-blue-400 cursor-pointer">
              Proxy@gmail.com
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-[#999999] text-[14px]">
          <p className="font-medium text-[16px] text-white pb-[20px]">
            My Account
          </p>
          <button className="hover:text-white text-left">My Account</button>
          <button className="hover:text-white text-left">Order History</button>
          <button className="hover:text-white text-left">Shoping Cart</button>
          <button className="hover:text-white text-left">Wishlist</button>
        </div>
        <div className="flex flex-col gap-3 text-[#999999] text-[14px]">
          <p className="font-medium text-[16px] text-white pb-[20px]">Helps</p>
          <button className="hover:text-white text-left">Contact</button>
          <button className="hover:text-white text-left">Faqs</button>
          <button className="hover:text-white text-left">
            Terms & Condition
          </button>
          <button className="hover:text-white text-left">Privacy Policy</button>
        </div>
        <div className="flex flex-col gap-3 text-[#999999] text-[14px]">
          <p className="font-medium text-[16px] text-white pb-[20px]">Proxy</p>
          <button className="hover:text-white text-left">About</button>
          <button className="hover:text-white text-left">Shop</button>
          <button className="hover:text-white text-left">Product</button>
          <button className="hover:text-white text-left">Track Order</button>
        </div>
        <div className="flex flex-col gap-3 text-[#999999] text-[14px]">
          <p className="font-medium text-[16px] text-white pb-[20px]">
            Categories
          </p>
          <button className="hover:text-white text-left">
            Fruit & Vegetables
          </button>
          <button className="hover:text-white text-left">Meat & Fish</button>
          <button className="hover:text-white text-left">Bread & Bakery</button>
          <button className="hover:text-white text-left">
            Beauty & Health
          </button>
        </div>
      </div>
      <div className="border mt-[60px] mx-[10%] opacity-20"></div>
      <div className="flex justify-between items-center px-[10%]">
        <p className="text-[#808080] pt-[29px] text-[14px]">
          Ecobazar eCommerce © 2021. All Rights Reserved
        </p>
        <div className="flex gap-2 pt-5">
          <img src={ApplePay} alt="ApplePay" />
          <img src={Visa} alt="Visa" />
          <img src={Discover} alt="Discover" />
          <img src={MasterCard} alt="MasterCard" />
          <img src={Secure} alt="Secure" />
        </div>
      </div>
    </div>
  );
};
