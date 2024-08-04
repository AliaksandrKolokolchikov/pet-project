import home from '../assets/AllCategories/homeAllCat.svg';
import arrowRight from '../assets/AllCategories/CoupleArrowRight.svg';
import { Footer, Header } from '../components';

export const AllCategories = () => {
  return (
    <>
      <Header />
      <div className="bg-banner-categories-bg w-full h-full font-[Poppins]">
        <div className="flex gap-4 py-[48px] pl-[10%]">
          <img src={home} alt="home" />
          <img src={arrowRight} alt="arrowRight" />
          <p className="text-[#999999] ">Categories</p>
          <img src={arrowRight} alt="arrowRight" />
          <p className="text-[#00B307]">Vegetables</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
