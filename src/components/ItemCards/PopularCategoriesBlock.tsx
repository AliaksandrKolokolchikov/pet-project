import { CardList } from '../../constants/CARD_LIST.ts';
import { CardFactory } from './CardFactory.tsx';
import { ArrowIcon } from '../Icons/ArrowIcon.tsx';

export const PopularCategoriesBlock = () => {
  return (
    <div className="px-[5%] font-[Poppins] w-full">
      <div>
        <div className="flex items-center justify-between px-[5%]">
          <span className="text-[32px] font-semibold">Popular Categories</span>
          <div className="flex group">
            <button className="font-[500] text-[#00B307] pr-3  group-hover:text-[#2C742F]">
              View All
            </button>
            <ArrowIcon />
          </div>
        </div>
        <div className="flex flex-wrap gap-1 justify-center mb-[3.125rem]">
          {CardList.map((item) => (
            <CardFactory product={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
