import arrowRight from '../../assets/MainPage/arrow right.svg';

export const PopularCategories = () => {
  return (
    <div className="h-[520px] px-[10%] font-[Poppins]">
      <div className=" border-dashed border ">
        <div className="flex items-center justify-between">
          <span className="text-[32px] font-semibold">Popular Categories</span>
          <div className="flex ">
            <button className="font-[500] text-[#00B307] pr-3">View All</button>
            <img src={arrowRight} alt="arrowRight" />
          </div>
        </div>
      </div>
    </div>
  );
};
