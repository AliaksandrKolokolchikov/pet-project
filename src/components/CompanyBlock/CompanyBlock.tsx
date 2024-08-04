import { StepsIcon } from '../Icons/CompanyBlock/stepsIcon.tsx';
import { MangoIcon } from '../Icons/CompanyBlock/mangoIcon.tsx';
import { FoodsIcon } from '../Icons/CompanyBlock/foodsIcon.tsx';
import { FoodIcon } from '../Icons/CompanyBlock/foodIcon.tsx';
import { BookOffIcon } from '../Icons/CompanyBlock/bookoffIcon.tsx';
import { SeriesIcon } from '../Icons/CompanyBlock/seriesIcon.tsx';

export const CompanyBlock = () => {
  return (
    <div className="flex justify-between items-center py-[60px] px-[10%]">
      <div className="group  cursor-pointer">
        <StepsIcon />
      </div>
      <div className="border-l-2">
        <div className="pl-[70px] group  cursor-pointer">
          <MangoIcon />
        </div>
      </div>
      <div className="border-l-2">
        <div className="pl-[70px] group cursor-pointer">
          <FoodsIcon />
        </div>
      </div>
      <div className="border-l-2">
        <div className="pl-[70px] group cursor-pointer">
          <FoodIcon />
        </div>
      </div>
      <div className="border-l-2">
        <div className="pl-[70px] group cursor-pointer">
          <BookOffIcon />
        </div>
      </div>
      <div className="border-l-2">
        <div className="pl-[70px] group cursor-pointer">
          <SeriesIcon />
        </div>
      </div>
    </div>
  );
};
