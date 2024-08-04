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
        <div className="hover:opacity-70">
          <img src={tomato} alt="" />
        </div>
        <div className="hover:opacity-70">
          <img src={leaf} alt="leaf" />
        </div>
        <div className="hover:opacity-70">
          <img src={leafDrop} alt="leafDrop" />
        </div>
        <div className="hover:opacity-70">
          <img src={chiliMore} alt="chiliMore" />
        </div>
        <div className="hover:opacity-70">
          <img src={leafs} alt="leafs" />
        </div>
        <div className="hover:opacity-70">
          <img src={iceOrange} alt="iceOrange" />
        </div>
      </div>
    </>
  );
};
