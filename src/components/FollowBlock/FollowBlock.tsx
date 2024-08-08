import leaf from '../../assets/FollowBlock/leaf.svg';
import leafDrop from '../../assets/FollowBlock/leaf drop.svg';
import chiliMore from '../../assets/FollowBlock/chiliMore.svg';
import leafs from '../../assets/FollowBlock/leafs.svg';
import iceOrange from '../../assets/FollowBlock/iceOrange.svg';
import tomato from '../../assets/FollowBlock/tomat.svg';

export const FollowBlock = () => {
  return (
    <>
      <div className="font-semibold fon-[Poppins] text-[32px] text-center pb-[32px]">
        Follow us on Instagram
      </div>
      <div className="flex justify-between px-[5%] pb-[60px] ">
        <div className="relative group hover:opacity-80">
          <img className="w-[200px] h-[200px]" src={tomato} alt="tomato" />
          <div className="group-hover:bg-no-repeat absolute top-[80px] left-[87px]">
            <a
              className="group-hover:bg-insta-bg absolute p-4"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>

        <div className="relative group hover:opacity-80">
          <img className="w-[200px] h-[200px]" src={leaf} alt="leaf" />
          <div className="group-hover:bg-no-repeat absolute top-[80px] left-[87px]">
            <a
              className="group-hover:bg-insta-bg absolute p-4"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>

        <div className="relative group hover:opacity-80">
          <img className="w-[200px] h-[200px]" src={leafDrop} alt="leafDrop" />
          <div className="group-hover:bg-no-repeat absolute top-[80px] left-[87px]">
            <a
              className="group-hover:bg-insta-bg absolute p-4"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>

        <div className="relative group hover:opacity-80">
          <img
            className="w-[200px] h-[200px]"
            src={chiliMore}
            alt="chiliMore"
          />
          <div className="group-hover:bg-no-repeat absolute top-[80px] left-[87px]">
            <a
              className="group-hover:bg-insta-bg absolute p-4"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>

        <div className="relative group hover:opacity-80">
          <img className="w-[200px] h-[200px]" src={leafs} alt="leafs" />
          <div className="group-hover:bg-no-repeat absolute top-[80px] left-[87px]">
            <a
              className="group-hover:bg-insta-bg absolute p-4"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>

        <div className="relative group hover:opacity-80">
          <img
            className="w-[200px] h-[200px]"
            src={iceOrange}
            alt="iceOrange"
          />
          <div className="group-hover:bg-no-repeat absolute top-[80px] left-[87px]">
            <a
              className="group-hover:bg-insta-bg absolute p-4"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
      </div>
    </>
  );
};
