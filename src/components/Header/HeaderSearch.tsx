import Logo from '../../assets/Header/Logo.svg';
import Search from '../../assets/Header/Search.svg';
import Heart from '../../assets/Header/Heart.svg';
import Cart from '../../assets/Header/Bag.svg';

export const HeaderSearch = () => {
  return (
    <>
      <div className="flex justify-between items-center h-[93px] pl-[10%] pr-[10%]">
        <div className="flex gap-[4.40px]">
          <img src={Logo} alt="#" />
          <span className="poppins-bl">Ecobazar</span>
        </div>
        <form className="flex  items-center border rounded-[10px] w-[400px] h-[45px] pt-3 pb-3 pl-[18px]">
          <div>
            <img src={Search} alt="#" />
          </div>
          <div className="grow ml-1">
            <input
              type="search"
              name="search"
              placeholder="Search"
              autoComplete="off"
            />
          </div>
          <div className="relative ">
            <button className=" rounded-r-[10px] bg-green w-[98px] h-[45px] font-[600]">
              <span className="text-white font-[Poppins] font-[600] text-[14px] leading-[120%] ">
                Search
              </span>
            </button>
          </div>
        </form>
        <div className="flex">
          <img className="pr-[16px]" src={Heart} alt="#" />
          <div className="pl-[16px] border-l-2">
            <img className="relative gap-2" src={Cart} alt="#" />
            <span className="absolute mt-[-35px] ml-[18px] w-[18px] h-[18px] border-[50%] bg-dark-green rounded-2xl text-white text-center text-[13px]">
              1
            </span>
          </div>
          <span className="flex flex-col text-[11px] font-[Poppins] font-normal leading-[120%] ml-[12px]">
            Shopping cart:
            <span className="font-medium text-[14px] mt-[7px] text-black leading-[100%]">
              $57.00
            </span>
          </span>
        </div>
      </div>
    </>
  );
};