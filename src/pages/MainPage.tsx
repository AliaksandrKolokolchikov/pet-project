import { Header } from '../components';
import { Footer } from '../components';
import { MainMiddleInfo } from '../components/MainMiddleInfo/MainMiddleInfo.tsx';
import { PopularCategories } from '../components/Popular Categories/PopularCategories.tsx';

export const MainPage = () => {
  return (
    <>
      <Header />
      <div className=" px-[8%]">
        <div className=" grid grid-cols-2 gap-4">
          <div className="bg-big-bg bg-no-repeat w-full"></div>
          <div className="box-border">
            <div className="bg-up-bg   w-[423px] h-[288px]"></div>
            <div className="bg-down-bg  w-[423px] h-[288px]"></div>
          </div>
        </div>
      </div>
      <MainMiddleInfo />
      <PopularCategories />
      <Footer />
    </>
  );
};
