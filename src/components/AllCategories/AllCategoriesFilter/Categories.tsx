import { useState } from 'react';

import dropUp from '../../../assets/AllCategories/dropup.svg';

export const Categories = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        <p className="font-medium text-[20px]">All Categories</p>
        <img
          className={`${dropdown ? ' cursor-pointer' : 'rotate-180 cursor-pointer'}`}
          onClick={handleClick}
          src={dropUp}
          alt="dropup"
        />
      </div>
      <div className={`${dropdown ? 'flex flex-col gap-y-2 ' : 'hidden'}`}>
        <div className="flex gap-2 accent-[#00B307]">
          <input className=" hue-rotate-180" type="radio" name="radio" />
          <p className="text-[14px]">Fresh Fruit</p>
        </div>
        <div className="flex gap-2">
          <input type="radio" name="radio" />
          <p className="text-[14px]">Vegetables</p>
        </div>
        <div className="flex gap-2">
          <input type="radio" name="radio" />
          <p className="text-[14px]">Cooking</p>
        </div>
        <div className="flex gap-2">
          <input type="radio" name="radio" />
          <p className="text-[14px]">Snacks</p>
        </div>
        <div className="flex gap-2">
          <input type="radio" name="radio" />
          <p className="text-[14px]">Beverages</p>
        </div>
        <div className="flex gap-2">
          <input type="radio" name="radio" />
          <p className="text-[14px]">Beauty & Health</p>
        </div>
        <div className="flex gap-2 border-b pb-[26px]">
          <input type="radio" name="radio" />
          <p className="text-[14px]">Bread & Bakery</p>
        </div>
      </div>
    </>
  );
};
