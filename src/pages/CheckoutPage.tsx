import home from '../assets/AllCategories/homeAllCat.svg';
import arrowRight from '../assets/AllCategories/CoupleArrowRight.svg';
import { Footer, Header } from '../components';
import { CheckoutWrapper } from '../components/ItemCards/Checkout/CheckoutWrapper.tsx';
import { useNavigate } from 'react-router-dom';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="bg-banner-categories-bg w-full h-full font-[Poppins]">
        <div className="flex gap-4 py-[48px] pl-[10%]">
          <img
            className="cursor-pointer"
            onClick={() => navigate('/')}
            src={home}
            alt="home"
          />
          <img src={arrowRight} alt="arrowRight" />
          <p
            onClick={() => navigate('/cart')}
            className="text-[#999999] hover:text-[#00B307] cursor-pointer"
          >
            Shopping Cart
          </p>
          <img src={arrowRight} alt="arrowRight" />
          <p className="text-[#00B307]">Checkout</p>
        </div>
      </div>
      <CheckoutWrapper />
      <Footer />
    </>
  );
};
