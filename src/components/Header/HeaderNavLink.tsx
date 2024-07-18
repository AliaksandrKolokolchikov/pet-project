import Arrow from '../../assets/Header/Arrow down.svg';
import Phone from '../../assets/Header/PhoneCall 1.svg';

export const HeaderNavLink = () => {
  return (
    <div className="flex justify-between items-center h-[60px] pl-[10%] pr-[10%] bg-gray-800 ">
      <div className="flex items-center gap-1 poppins-nav">
        <span>Home</span>
        <button>
          <img src={Arrow} alt="#" />
        </button>
        <div className="flex gap-1">
          <span className="pl-[32px]">Shop</span>
          <button>
            <img src={Arrow} alt="#" />
          </button>
        </div>
        <div className="flex gap-1">
          <span className="pl-[32px]">Pages</span>
          <button>
            <img src={Arrow} alt="#" />
          </button>
        </div>
        <div className="flex gap-1">
          <span className="pl-[32px]">Blog</span>
          <button>
            <img src={Arrow} alt="#" />
          </button>
        </div>
        <div className="flex">
          <span className="pl-[32px]">About Us</span>
        </div>
        <div className="flex">
          <span className="pl-[32px]">Contact Us</span>
        </div>
      </div>
      <div className="flex gap-2 poppins-nav items-center">
        <img src={Phone} alt="#" />
        <span className="text-white cursor-pointer">(219) 555-014</span>
      </div>
    </div>
  );
};
