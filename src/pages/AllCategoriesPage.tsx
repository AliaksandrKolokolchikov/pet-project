import home from '../assets/AllCategories/homeAllCat.svg';
import arrowRight from '../assets/AllCategories/CoupleArrowRight.svg';
import { Footer, Header } from '../components';
import { AllCategories } from '../components/AllCategories/AllCategories.tsx';

export const AllCategoriesPage = () => {
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

      <div className="flex  px-[4%]">
        <aside className="min-w-[312px] min-h-[1799px] bg-violet-600 "></aside>
        <div className="max-w-[984px] min-h-[1000px]">
          <div className="flex justify-between  font-[Poppins]">
            <div className="flex pt-[35px] pl-6">
              <p className="mt-2.5 mr-2 text-[14px] text-[#808080]">Sort by:</p>
              <select className="border w-[166px] h-[41px] pl-3 text-[14px]">
                <option value="someOption">Latest</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
            <div className="flex pt-[35px] gap-2">
              <p>52</p>
              <p className="text-[#666666]">Results Found</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pl-6 pt-[30px]">
            <AllCategories />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
