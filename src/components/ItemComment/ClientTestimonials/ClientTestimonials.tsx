import { Commentary } from '../../../types/types.tsx';
import quotes from '../../../assets/comments/Testimonial/quotes.svg';
import fiveStar from '../../../assets/comments/Testimonial/fiveStar.svg';

type Props = {
  commentary: Commentary;
};

export const ClientTestimonials = ({ commentary }: Props) => {
  return (
    <>
      <div className="w-[424px] h-[254px] font-[Poppins] bg-white border rounded-[8px] shadow-md">
        <div className="flex flex-col px-6">
          <img className="w-[32px] h-[26px] mt-6" src={quotes} alt="quotes" />
          <p className="text-[14px] text-[#4D4D4D] my-4">{commentary.title}</p>
          <div className="flex">
            <img src={commentary.avatar} alt="avatar" />
            <div className="flex flex-col justify-center pl-3">
              <p className="font-medium text-[#1A1A1A]">{commentary.name}</p>
              <p className="text-[14px] text-[#999999]">{commentary.role}</p>
            </div>
            <img className="pl-[20%]" src={fiveStar} alt="fiveStar" />
          </div>
        </div>
      </div>
    </>
  );
};
