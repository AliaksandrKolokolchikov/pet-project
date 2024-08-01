import foods from '../../assets/CompanyBlock/foods.svg';
import food from '../../assets/CompanyBlock/food.svg';
import bookOff from '../../assets/CompanyBlock/bookoff-corporation-logo.svg';
import series from '../../assets/CompanyBlock/series.svg';
import { StepsIcon } from '../Icons/stepsIcon.tsx';
import { MangoIcon } from '../Icons/mangoIcon.tsx';

export const CompanyBlock = () => {
  return (
    <div className="flex justify-between items-center py-[60px] px-[10%]">
      <div className="group">
        <StepsIcon />
      </div>
      <div className="border-l-2">
        <div className="pl-[70px] group ">
          <MangoIcon />
        </div>
      </div>
      <div className="border-l-2">
        <img className="pl-[80px]" src={foods} alt="foods" />
      </div>
      <div className="border-l-2">
        <img className="pl-[80px]" src={food} alt="food" />
      </div>
      <div className="border-l-2">
        <img className="pl-[80px]" src={bookOff} alt="bookOff" />
      </div>
      <div className="border-l-2">
        <img className="pl-[80px]" src={series} alt="series" />
      </div>
    </div>
  );
};
