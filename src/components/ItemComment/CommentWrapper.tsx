import { ReactNode } from 'react';
import { ArrowLeft } from '../Icons/ArrowLeft.tsx';
import arrowGreen from '../../assets/comments/Testimonial/arrowGreen.svg';

type Props = {
  title: string;
  children: ReactNode;
};

export const CommentWrapper = ({ title, children }: Props) => {
  return (
    <div className="px-[3%] font-[Poppins] min-h-[452px] bg-[#F2F2F2] ">
      <div>
        <div className="flex items-center justify-between px-[3%] pb-[35px] pt-[63px]">
          <span className="text-[32px] font-semibold">{title}</span>
          <div className="flex gap-2">
            <ArrowLeft />
            <img src={arrowGreen} alt="arrowGreen" />
          </div>
        </div>
        <div className="flex gap-3 justify-center mb-[3.125rem]">
          {children}
        </div>
      </div>
    </div>
  );
};
