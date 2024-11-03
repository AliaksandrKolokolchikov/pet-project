import { ArrowIcon } from '../Icons/ArrowIcon.tsx';
import { TimerBanner } from './TimerBannerInfo.tsx';
import { useNavigate } from 'react-router-dom';

export const BannerInfoCard = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 8326);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between px-[5%] gap-2 font-[Poppins] pb-[60px]">
      <div className="bg-avocado-bg bg-cover w-[424px] h-[536px]">
        <p className="text-center mt-[35px] uppercase text-white font-medium text-[14px]">
          Best Deals
        </p>
        <p className="text-center text-white text-[40px] font-semibold mt-4">
          Sale of the Month
        </p>
        <TimerBanner expiryTimestamp={time} />
        <button
          onClick={() => navigate('/all-categories')}
          className="bg-white rounded-3xl w-[162px] h-[51px] mt-[28px] ml-[30%]"
        >
          <div className="flex text-[#00B307] justify-center group">
            <p className="font-semibold pr-2 group-hover:text-[#2C742F]">
              Shop now
            </p>
            <ArrowIcon />
          </div>
        </button>
      </div>
      <div className="bg-meat-bg bg-cover w-[424px] h-[536px]">
        <p className="text-center mt-[35px] uppercase text-white font-medium text-[14px]">
          85% Fat Free
        </p>
        <p className="text-center text-white text-[40px] font-semibold mt-4">
          Low-Fat Meat
        </p>
        <div className="flex justify-center text-white mt-[14px] mb-[30px]">
          <span className="mr-2">Started at</span>
          <p className="text-[#FF8A00]">$79.99</p>
        </div>
        <button
          onClick={() => navigate('/all-categories')}
          className="bg-white rounded-3xl w-[162px] h-[51px] ml-[30%]"
        >
          <div className="flex text-[#00B307] justify-center group">
            <p className="font-semibold pr-2 group-hover:text-[#2C742F]">
              Shop now
            </p>
            <ArrowIcon />
          </div>
        </button>
      </div>
      <div className="bg-fruit-bg bg-cover w-[424px] h-[536px]">
        <p className="text-center mt-[35px] uppercase  font-medium text-[14px]">
          Summer Sale
        </p>
        <p className="text-center text-[40px] font-semibold mt-4">
          100% Fresh Fruit
        </p>
        <div className="flex justify-center items-center mb-[30px] mt-2">
          <span className="mr-[6px] text-[18px] ">Up to</span>
          <p className="font-semibold text-[18px] text-[#FCC900] bg-[#1A1A1A] h-[39px] w-[100px] text-center pt-[6px]">
            64% OFF
          </p>
        </div>
        <button
          onClick={() => navigate('/all-categories')}
          className="bg-white rounded-3xl w-[162px] h-[51px] ml-[30%]"
        >
          <div className="flex text-[#00B307] justify-center group">
            <p className="font-semibold pr-2 group-hover:text-[#2C742F]">
              Shop now
            </p>
            <ArrowIcon />
          </div>
        </button>
      </div>
    </div>
  );
};
