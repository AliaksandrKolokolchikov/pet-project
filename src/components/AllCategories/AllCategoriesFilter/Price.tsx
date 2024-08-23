import { useState } from 'react';

import dropUp from '../../../assets/AllCategories/dropup.svg';

export const Price = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <div className="flex justify-between pt-5 mb-5">
        <p className="font-medium text-[20px]">Price</p>
        <img
          className={`${dropdown ? ' cursor-pointer' : 'rotate-180 cursor-pointer'}`}
          onClick={handleClick}
          src={dropUp}
          alt="dropup"
        />
      </div>
    </>
  );
};
