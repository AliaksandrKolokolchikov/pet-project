import Map from '../../assets/Header/Map Pin.svg';
import Arrow from '../../assets/Header/Arrow down.svg';
import { isSpecialRoute } from '../../utils.ts';
import { UserAuth } from './UserAuth.tsx';

export const HeaderAuth = () => {
  return (
    <>
      <div
        className={`${
          isSpecialRoute(location.pathname)
            ? `bg-[#333333] text-[#B3B3B3]`
            : `bg-white`
        } flex justify-between items-center border-b-2 h-[42px] pl-[10%] pr-[10%] poppins-md`}
      >
        <div className="flex gap-2  items-center">
          <img src={Map} alt="Your location" />
          <div>Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
        </div>
        <div className="flex gap-1.5 items-center">
          <span className="hover:text-green-400 cursor-pointer">Eng</span>
          <button>
            <img src={Arrow} alt="Arrow down" />
          </button>
          <span className="hover:text-green-400 cursor-pointer">USD</span>
          <button>
            <img className="pr-4" src={Arrow} alt="Arrow down" />
          </button>
          <UserAuth />
        </div>
      </div>
    </>
  );
};
