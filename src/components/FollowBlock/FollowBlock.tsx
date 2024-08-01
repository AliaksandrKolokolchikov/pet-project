import tomat from '../../assets/FollowBlock/tomat.svg';
import leaf from '../../assets/FollowBlock/leaf.svg';
import leafDrop from '../../assets/FollowBlock/leaf drop.svg';
import chiliMore from '../../assets/FollowBlock/chiliMore.svg';
import leafs from '../../assets/FollowBlock/leafs.svg';
import iceOrange from '../../assets/FollowBlock/iceOrange.svg';

export const FollowBlock = () => {
  return (
    <>
      <div className="font-semibold fon-[Poppins] text-[32px] text-center pb-[32px]">
        Follow us on Instagram
      </div>
      <div className="flex justify-between px-[5%] pb-[60px] ">
        <div>
          <img src={tomat} alt="tomat" />
        </div>
        <div>
          <img src={leaf} alt="leaf" />
        </div>
        <div>
          <img src={leafDrop} alt="leafDrop" />
        </div>
        <div>
          <img src={chiliMore} alt="chiliMore" />
        </div>
        <div>
          <img src={leafs} alt="leafs" />
        </div>
        <div>
          <img src={iceOrange} alt="iceOrange" />
        </div>
      </div>
    </>
  );
};
