import delivery from '../../assets/MainPage/delivery.svg';
import headphones from '../../assets/MainPage/headphones.svg';
import shopping from '../../assets/MainPage/shopping-bag.svg';
import box from '../../assets/MainPage/box.svg';

export const MainMiddleInfo = () => {
  return (
    <div className=" px-[10%] pt-[24px] pb-[60px] ">
      <div className=" font-[Poppins] h-[128px] rounded-[8px] shadow-2xl  bg-[#FFFFFF] pt-[40px]">
        <div className="flex justify-between">
          <img className="pl-[30px]" src={delivery} alt="delivery" />
          <div className="pl-[10px]">
            <span className="text-[16px] font-semibold">Free Shipping</span>
            <p className="text-[14px] text-[#999999] pt-2">
              Free shipping on all your order
            </p>
          </div>
          <img className="pl-[10px]" src={headphones} alt="headphones" />
          <div className="pl-[16px]">
            <span className="text-[16px] font-semibold">
              Customer Support 24/7
            </span>
            <p className="text-[14px] text-[#999999] pt-2">
              Instant access to Support
            </p>
          </div>
          <img className="pl-[10px]" src={shopping} alt="shopping" />
          <div className="pl-[16px] pr-[10px]">
            <span className="text-[16px] font-semibold">
              100% Secure Payment
            </span>
            <p className="text-[14px] text-[#999999] pt-2">
              We ensure your money is save
            </p>
          </div>
          <img className="pl-[10px]" src={box} alt="box" />
          <div className="pl-[16px] pr-[30px]">
            <span className="text-[16px] font-semibold">
              Money-Back Guarantee
            </span>
            <p className="text-[14px] text-[#999999] pt-2">
              30 Days Money-Back Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
