import { useLocation, useNavigate } from 'react-router-dom';

import { Footer, Header } from '../components';
import { CompanyBlock } from '../components';
import { ClientTestimonialsBlock } from '../components/ItemComment/ClientTestimonials/ClientTestimonialsBlock.tsx';
import { ArrowIconWhite } from '../components/Icons/ArrowIconWhite.tsx';

import grandfather from '../assets/AboutUs/grandfather.svg';
import withBag from '../assets/AboutUs/withBag.svg';
import leaf from '../assets/AboutUs/leaf.svg';
import star from '../assets/AboutUs/star.svg';
import car from '../assets/AboutUs/car.svg';
import headphones from '../assets/AboutUs/headphones.svg';
import tasks from '../assets/AboutUs/tasks.svg';
import box from '../assets/AboutUs/box.svg';
import check from '../assets/AboutUs/Check.svg';
import cody from '../assets/AboutUs/Cody.svg';
import robert from '../assets/AboutUs/Robert.svg';
import jane from '../assets/AboutUs/Jane.svg';
import jenny from '../assets/AboutUs/Jenny.svg';
import arrowRight from '../assets/AllCategories/CoupleArrowRight.svg';
import home from '../assets/AllCategories/homeAllCat.svg';

export const AboutUsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="bg-banner-categories-bg w-full h-full font-[Poppins]">
        <div className="flex gap-4 py-[48px] pl-[10%]">
          <img
            className="cursor-pointer"
            onClick={() => navigate('/')}
            src={home}
            alt="home"
          />
          <img src={arrowRight} alt="arrowRight" />
          <p className="text-[#00B307] cursor-pointer capitalize">
            {location.pathname.replace('/', '')}
          </p>
        </div>
      </div>
      <div className="flex pl-[5%] pr-[3%]">
        <div className="flex flex-col font-Poppins pt-[176px]">
          <p className="font-semibold text-[56px] max-w-[607px] mb-8 ">
            100% Trusted Organic Food Store
          </p>
          <p className="max-w-[590px] text-[18px] text-[#666666] mr-[58px]">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </p>
        </div>
        <div className="py-[80px]">
          <img
            className="max-w-[716px] max-h-[492px]"
            src={grandfather}
            alt="grandfather"
          />
        </div>
      </div>

      <div className="flex">
        <div className="bg-withBag-bg bg-no-repeat bg-center w-[745px] h-[685px]"></div>
        <div className="flex flex-col font-Poppins">
          <p className="font-semibold text-[56px] max-w-[600px] mb-5 ">
            100% Trusted Organic Food Store
          </p>
          <p className="text-[#808080] max-w-[570px] mr-[4%] mb-6">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi. Nulla eu eros consequat tortor tincidunt feugiat.
          </p>

          <div className="flex gap-3">
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <img src={leaf} alt="leaf" />
                <div className="pl-4">
                  <p className="text-[18px] font-medium">100% Organic food</p>
                  <p className="text-[14px] text-[#808080] mt-2">
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={star} alt="star" />
                <div className="pl-4">
                  <p className="text-[18px] font-medium">Customer Feedback</p>
                  <p className="text-[14px] text-[#808080] mt-2">
                    Our happy customer
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={car} alt="car" />
                <div className="pl-4">
                  <p className="text-[18px] font-medium">Free Shipping</p>
                  <p className="text-[14px] text-[#808080] mt-2">
                    Free shipping with discount
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <img src={headphones} alt="headphones" />
                <div className="pl-4">
                  <p className="text-[18px] font-medium">Great Support 24/7</p>
                  <p className="text-[14px] text-[#808080] mt-2">
                    Instant access to Contact
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={tasks} alt="tasks" />
                <div className="pl-4">
                  <p className="text-[18px] font-medium">100% Sucure Payment</p>
                  <p className="text-[14px] text-[#808080] mt-2">
                    We ensure your money is save
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img src={box} alt="box" />
                <div className="pl-4">
                  <p className="text-[18px] font-medium">100% Organic Food</p>
                  <p className="text-[14px] text-[#808080] mt-2">
                    100% healthy & Fresh food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-Poppins flex pl-[5%]">
        <div className="flex flex-col max-w-[532px] mr-[29px]">
          <p className="text-[48px] font-semibold mb-6 pt-[160px]">
            We Delivered, You Enjoy Your Order.
          </p>
          <p className="text-[#666666] mb-5">
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
            ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim
            diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum
            nunc eget elementum.
          </p>
          <div className="flex gap-2">
            <img src={check} alt="check" />
            <p className="text-[#666666]">Sed in metus pellentesque.</p>
          </div>
          <div className="flex gap-2 my-4">
            <img src={check} alt="check" />
            <p className="text-[#666666]">
              Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
            </p>
          </div>
          <div className="flex gap-2">
            <img src={check} alt="check" />
            <p className="text-[#666666]">
              Maecenas ut nunc fringilla erat varius.
            </p>
          </div>
          <button className="bg-[#00B307] rounded-3xl w-[191px] h-[51px] mt-[28px]">
            <div className="flex text-[#00B307] justify-center group">
              <p className="font-[600] pr-[16px] text-white group-hover:text-[#2C742F]">
                Shop now
              </p>
              <ArrowIconWhite />
            </div>
          </button>
        </div>
        <div className="pt-20 min-w-[895px] min-h-[606px]">
          <img src={withBag} alt="withBag" />
        </div>
      </div>
      <div className="bg-[#F2F2F2] font-Poppins w-full h-[736px]">
        <p className="text-center font-semibold text-[48px] pt-20">
          Our Awesome Team
        </p>
        <p className=" text-[#666666] max-w-[640px] ml-[28%] text-center pb-7">
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
          Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
          mi.
        </p>

        <div className="flex gap-3 px-[5%]">
          <div className="flex flex-col group">
            <img src={jenny} alt="jenny" />
            <div className="h-[88px] w-[312px] bg-white flex flex-col pl-5 pt-4 rounded-[8px] group-hover:shadow-md">
              <p className="text-[18px] font-medium">Jenny Wilson</p>
              <p className="text-[14px] text-[#808080]">Ceo & Founder</p>
            </div>
          </div>

          <div className="flex flex-col group">
            <img src={jane} alt="jane" />
            <div className="h-[88px] w-[312px] bg-white flex flex-col pl-5 pt-4 rounded-[8px] group-hover:shadow-md">
              <p className="text-[18px] font-medium">Jane Cooper</p>
              <p className="text-[14px] text-[#808080]">Worker</p>
            </div>
          </div>

          <div className="flex flex-col group">
            <img src={cody} alt="cody" />
            <div className="h-[88px] w-[312px] bg-white flex flex-col pl-5 pt-4 rounded-[8px] group-hover:shadow-md">
              <p className="text-[18px] font-medium">Cody Fisher</p>
              <p className="text-[14px] text-[#808080]">Security Guard</p>
            </div>
          </div>

          <div className="flex flex-col group">
            <img src={robert} alt="robert" />
            <div className="h-[88px] w-[312px] bg-white flex flex-col pl-5 pt-4 rounded-[8px] group-hover:shadow-md">
              <p className="text-[18px] font-medium">Robert Fox</p>
              <p className="text-[14px] text-[#808080]">
                Senior Farmer Manager
              </p>
            </div>
          </div>
        </div>
      </div>
      <ClientTestimonialsBlock />
      <CompanyBlock />
      <Footer />
    </>
  );
};
