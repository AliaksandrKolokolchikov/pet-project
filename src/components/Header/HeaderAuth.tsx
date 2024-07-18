import Map from '../../assets/Header/Map Pin.svg';
import Arrow from '../../assets/Header/Arrow down.svg';

export const HeaderAuth = () => {
  return (
    <>
      <div className="flex justify-between items-center border-b-2 h-[42px] pl-[10%] pr-[10%] poppins-md">
        <div className="flex gap-2  items-center">
          <img src={Map} alt="#" />
          <div>Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
        </div>
        <div className="flex gap-1.5 items-center">
          <span>Eng</span>
          <button>
            <img src={Arrow} alt="#" />
          </button>
          <span>USD</span>
          <button>
            <img className="pr-4" src={Arrow} alt="#" />
          </button>
          <div className="flex gap-1  ">
            <button className="cursor-pointer">Sign In</button>
            <span className="pl-1 pr-1">/</span>
            <button className="cursor-pointer">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};
