import { useNavigate } from 'react-router-dom';

import { Footer, Header } from '../components';
import { DashboardWrapper } from '../components';
import home from '../assets/AllCategories/homeAllCat.svg';
import arrowRight from '../assets/AllCategories/CoupleArrowRight.svg';

export const UserDashboard = () => {
  const navigate = useNavigate();

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
      <div>
        <DashboardWrapper />
      </div>
      <Footer />
    </>
  );
};
