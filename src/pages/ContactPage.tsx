import { useNavigate } from 'react-router-dom';

import { Footer, Header } from '../components';
import { ContactMap } from '../components';
import home from '../assets/AllCategories/homeAllCat.svg';
import arrowRight from '../assets/AllCategories/CoupleArrowRight.svg';
import locationIcon from '../assets/Contact/location.svg';
import messages from '../assets/Contact/message.svg';
import telephone from '../assets/Contact/telephone.svg';
import { EmailContact } from '../components';

export const ContactPage = () => {
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

      <div className="flex px-[3%] py-20 font-Poppins">
        <div className="flex flex-col">
          <div className="min-w-[312px] min-h-[507px] bg-white shadow-2xl rounded-lg">
            <div className="flex flex-col  max-w-[272px] min-h-[169px] mx-5  text-[#333333]">
              <div className="text-center border-b pb-6">
                <img
                  className="pl-[40%] pb-5 pt-7"
                  src={locationIcon}
                  alt="locationIcon"
                />
                <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
              </div>
              <div className="text-center border-b pb-6">
                <img
                  className="pl-[40%] pb-5 pt-7"
                  src={messages}
                  alt="message"
                />
                <p>Proxy@gmail.com Help.proxy@gmail.com</p>
              </div>
              <div className="text-center pb-6">
                <img
                  className="pl-[40%] pb-5 pt-7"
                  src={telephone}
                  alt="telephone"
                />
                <p>(219) 555-0114 </p>
                <p>(164) 333-0487</p>
              </div>
            </div>
          </div>
        </div>
        <EmailContact />
      </div>
      <ContactMap />
      <Footer />
    </>
  );
};
