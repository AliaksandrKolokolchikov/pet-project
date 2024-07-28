import { ArrowIcon } from '../Icons/ArrowIcon.tsx';
import { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export const ProductWrapper = ({ title, children }: Props) => {
  return (
    <div className="px-[5%] font-[Poppins] w-full">
      <div>
        <div className="flex items-center justify-between px-[5%]">
          <span className="text-[32px] font-semibold">{title}</span>
          <div className="flex group">
            <button className="font-[500] text-[#00B307] pr-3  group-hover:text-[#2C742F]">
              View All
            </button>
            <ArrowIcon />
          </div>
        </div>
        <div className="flex flex-wrap gap-1 justify-center mb-[3.125rem]">
          {children}
        </div>
      </div>
    </div>
  );
};
