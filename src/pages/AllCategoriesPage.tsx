import { useSearchParams } from 'react-router-dom';

import home from '../assets/AllCategories/homeAllCat.svg';
import arrowRight from '../assets/AllCategories/CoupleArrowRight.svg';
import filterButton from '../assets/AllCategories/filterButton.svg';

import { Footer, Header } from '../components';
import { AllCategories } from '../components';
import { Categories } from '../components';
import { Price } from '../components';
import { RatingFilter } from '../components';

import { AllCategoriesCard } from '../constants/CARD_LIST.ts';
import { getPrice } from '../utils.ts';

export const AllCategoriesPage = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const rating = searchParams.get('rating');
  const price = searchParams.get('price')?.split(',');

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

      <div className="flex  px-[4%] font-Poppins">
        <aside className="min-w-[312px] min-h-[1799px] mt-8">
          <button className="w-[131px] h-[45px] bg-[#00B307] rounded-full mb-6">
            <div className="flex items-center justify-center gap-4">
              <p className="font-semibold text-[14px] text-white">Filter</p>
              <img src={filterButton} alt="filterButton" />
            </div>
          </button>
          <Categories />
          <Price />
          <RatingFilter />
        </aside>

        <div className="max-w-[984px] w-full min-h-[1000px]">
          <div className="flex justify-between w-full font-[Poppins]">
            <div className="flex pt-[35px] pl-6">
              <p className="mt-2.5 mr-2 text-[14px] text-[#808080]">Sort by:</p>
              <select className="border w-[166px] h-[41px] pl-3 text-[14px]">
                <option value="someOption">Latest</option>
                <option value="otherOption">Other option</option>
              </select>
            </div>
            <div className="flex pt-[35px] gap-2">
              <p>
                {
                  AllCategoriesCard.filter((item) => {
                    const categoryMatch = categoryFilter
                      ? item.type === categoryFilter
                      : true;
                    const ratingMatch = rating
                      ? item.rating! >= parseInt(rating, 10)
                      : true;
                    const priceMatch = price
                      ? getPrice(item.price!) >= Number(price[0]) &&
                        getPrice(item.price!) <= Number(price[1])
                      : true;
                    return categoryMatch && ratingMatch && priceMatch;
                  }).length
                }
              </p>
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
