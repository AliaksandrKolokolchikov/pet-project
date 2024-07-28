import Facebook from '../../assets/Footer/facebook 1.svg';
import Twitter from '../../assets/Footer/twitter 1.svg';
import Pinterest from '../../assets/Footer/pinterest 1.svg';
import Instagram from '../../assets/Footer/instagram 1.svg';

export const FooterSub = () => {
  return (
    <div className="flex justify-between items-center bg-[#F7F7F7] pl-[10%] pr-[10%] h-[162px] font-[Poppins] ">
      <div className="flex flex-col w-[448px]">
        <p className=" font-semibold text-2xl text-[#1A1A1A]">
          Subcribe our Newsletter
        </p>
        <p className=" text-[14px] text-[#999999] pt-1 ]">
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
          Phasellus imperdiet elit eu magna.
        </p>
      </div>
      <div className="border-[3px] rounded-[30px] w-[492px] relative">
        <input
          className=" h-[52px] w-full focus:outline-none pl-6 bg-[#F7F7F7] rounded-[30px]"
          type="email"
          placeholder="Your email adress"
          name="email"
          autoComplete="off"
        />
        <button className="bg-[#00B307] rounded-[30px] w-[162px] h-[52px] absolute right-0">
          <p className=" text-[16px] font-semibold text-white">Subscribe</p>
        </button>
      </div>
      <div className="flex gap-[31px] pl-10 ">
        <a target="_blank" href="https://www.facebook.com/" rel="noreferrer">
          <div className="bg-[#00B307] rounded-[30px]">
            <img src={Facebook} alt="Facebook" />
          </div>
        </a>
        <a target="_blank" href="https://www.twitter.com/" rel="noreferrer">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a target="_blank" href="https://www.pinterest.com/" rel="noreferrer">
          <img src={Pinterest} alt="Pinterest" />
        </a>
        <a target="_blank" href="https://www.instagram.com/ " rel="noreferrer">
          <img src={Instagram} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};
