import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { ArrowIcon } from '../Icons/ArrowIcon.tsx';
import { ROUTES } from '../../constants';

type Props = {
  title: string;
  children: ReactNode;
  isGrid?: boolean;
};

export const ProductWrapper = ({ title, children, isGrid = false }: Props) => {
  return (
    <div className="px-[3%] font-[Poppins] w-full">
      <div>
        <div
          className={`${isGrid ? `px-[1%]` : `px-[5%]`} flex items-center justify-between px-[5%] pb-5`}
        >
          <span className="text-[32px] font-semibold ">{title}</span>
          <Link to={ROUTES.ALL_CATEGORIES}>
            <div className="flex group">
              <button className="font-[500] text-[#00B307] pr-3 group-hover:text-[#2C742F]">
                View All
              </button>
              <ArrowIcon />
            </div>
          </Link>
        </div>
        <div
          className={`${
            isGrid ? `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5` : ` flex`
          } flex-wrap gap-1 justify-center mb-[3.125rem]`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
