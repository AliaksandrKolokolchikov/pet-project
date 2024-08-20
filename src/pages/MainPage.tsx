import { Header } from '../components';
import { Footer } from '../components';
import { MainMiddleInfo } from '../components/MainMiddleInfo/MainMiddleInfo.tsx';
import { PopularCategoriesBlock } from '../components';
import { ArrowIcon } from '../components/Icons/ArrowIcon.tsx';
import { ArrowIconWhite } from '../components/Icons/ArrowIconWhite.tsx';
import { FeaturedProductsBlock } from '../components';
import { HotDealsBlock } from '../components';
import { PopularProductsBlock } from '../components';
import { BannerInfoCard } from '../components/BannerInfoCard/BannerInfoCard.tsx';
import { LatestNews } from '../components/LatestNews/LatestNews.tsx';
import { ClientTestimonialsBlock } from '../components/ItemComment/ClientTestimonials/ClientTestimonialsBlock.tsx';
import { CompanyBlock } from '../components/CompanyBlock/CompanyBlock.tsx';
import { FollowBlock } from '../components/FollowBlock/FollowBlock.tsx';

export const MainPage = () => {
  return (
    <>
      <Header />
      <div className="px-[10%] mt-[24px] flex h-[600px] font-[Poppins]">
        <div className="bg-big-bg bg-center  bg-no-repeat max-w-[872px] rounded-[10px]">
          <div className="pt-[155px] pl-[60px] font-[Poppins]">
            <p className="font-semibold text-[48px] text-white w-[70%]">
              Fresh & Healthy Organic Food
            </p>
            <div className="mt-[32px] border-l-2 border-[#84D187]">
              <div className="flex">
                <p className="font-[500] text-[20px] text-white pl-[14px] pr-2">
                  Sale up to
                </p>
                <button className=" bg-[#FF8A00]">
                  <p className="text-[20px] text-white font-semibold">
                    30% OFF
                  </p>
                </button>
              </div>
              <p className="pl-[14px] text-[14px] text-[#FFFFFF] pt-2">
                Free shipping on all your order.
              </p>
            </div>
            <button className="bg-white rounded-3xl w-[191px] h-[51px] mt-[28px]">
              <div className="flex text-[#00B307] justify-center group">
                <p className="font-[600] pr-[16px] group-hover:text-[#2C742F]">
                  Shop now
                </p>
                <ArrowIcon />
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[22rem] ml-1 gap-y-2">
          <div className="bg-down-bg bg-no-repeat bg-center  w-full h-full max-w-[423px] rounded-[15px]">
            <p className="text-[#1A1A1A] text-[14px] font-[500] uppercase pt-[32px] pl-[32px] pb-2">
              Summer Sale
            </p>
            <p className="text-[#1A1A1A] font-semibold text-[32px] pl-[32px] pb-3 ">
              75% OFF
            </p>
            <span className="text-[#666666] font-normal pl-[32px]">
              Only Fruit & Vegetable
            </span>
            <div className="flex mt-6 group">
              <button className="font-semibold text-[#00B307] text-[16px] pr-3 group-hover:text-[#2C742F] pl-[32px]">
                Shop Now
              </button>
              <ArrowIcon />
            </div>
          </div>
          <div className="bg-up-bg bg-no-repeat bg-center w-full h-full max-w-[423px] rounded-[15px]">
            <p className="font-normal text-[14px] text-white uppercase pt-[67px] pb-3 text-center">
              Best Deal
            </p>
            <p className="font-semibold text-[30px] text-white text-center px-[28px] leading-[120%]">
              Special Products Deal of the Month
            </p>
            <div className="flex group pl-[35%] pt-[32px]">
              <button className="font-semibold text-[#00B307] text-[16px] group-hover:text-[#2C742F] pr-3 ">
                Shop Now
              </button>
              <ArrowIcon />
            </div>
          </div>
        </div>
      </div>
      <MainMiddleInfo />
      <PopularCategoriesBlock />
      <PopularProductsBlock />
      <BannerInfoCard />
      <HotDealsBlock />
      <div className="bg-discount-bg bg-no-repeat mx-[5%] mb-[60px] min-h-[358px] font-[Poppins]">
        <div className="flex justify-end pt-[60px]">
          <div className="flex flex-col">
            <span className="font-medium text-[16px] uppercase text-white">
              Summer Sale
            </span>
            <div className="flex">
              <p className="font-semibold text-[56px] text-[#FF8A00] mr-2">
                37%
              </p>
              <p className=" text-[56px] text-white">OFF</p>
            </div>
            <p className="text-white opacity-70 pr-[32px] w-[441px]">
              Free on all your order, Free Shipping and 30 days money-back
              guarantee
            </p>
            <button className="bg-[#00B307] rounded-3xl w-[191px] h-[51px] mt-[28px]">
              <div className="flex text-[#00B307] justify-center group">
                <p className="font-[600] pr-[16px] text-white group-hover:text-[#2C742F]">
                  Shop now
                </p>
                <ArrowIconWhite />
              </div>
            </button>
          </div>
        </div>
      </div>
      <FeaturedProductsBlock />
      <LatestNews />
      <ClientTestimonialsBlock />
      <CompanyBlock />
      <FollowBlock />
      <Footer />
    </>
  );
};
