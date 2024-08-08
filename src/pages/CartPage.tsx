import { Footer, Header } from '../components';
import { CartWrapper } from '../components/ItemCards/CartList/CartListWrapper.tsx';
import home from '../assets/AllCategories/homeAllCat.svg';
import arrowRight from '../assets/AllCategories/CoupleArrowRight.svg';
import { useNavigate } from 'react-router-dom';

export const CartPage = () => {
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
          <p className="text-[#00B307] cursor-pointer">Shopping cart</p>
        </div>
      </div>
      <CartWrapper />
      <Footer />
    </>
  );
};
