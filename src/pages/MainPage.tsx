import ArrowRight from '../assets/MainPage/arrow right.svg';
import { Header } from '../components';
import { Footer } from '../components';
import { MainMiddleInfo } from '../components/MainMiddleInfo/MainMiddleInfo.tsx';
import { PopularCategoriesBlock } from '../components/ItemCards/PopularCategoriesBlock.tsx';

export const MainPage = () => {
  return (
    <>
      <Header />
      <div className="px-[10%] mt-[24px] flex h-[600px]">
        <div className="bg-big-bg bg-center bg-no-repeat w-full max-w-[872px]">
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
              <div className="flex text-[#00B307] justify-center">
                <p className="font-[600] pr-[16px] ">Shop now</p>
                <img src={ArrowRight} alt="ArrowRight" />
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[22rem] ml-1 gap-y-2">
          <div className="bg-down-bg bg-no-repeat bg-center  w-full h-full max-w-[423px] rounded-[15px]"></div>
          <div className="bg-up-bg bg-no-repeat bg-center w-full h-full max-w-[423px] rounded-[15px]"></div>
        </div>
      </div>
      <MainMiddleInfo />
      <PopularCategoriesBlock />
      <Footer />
    </>
  );
};
