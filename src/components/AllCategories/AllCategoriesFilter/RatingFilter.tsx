import { useState } from 'react';
import Rating from '@mui/material/Rating';

import dropUp from '../../../assets/AllCategories/dropup.svg';
import { useSearchParams } from 'react-router-dom';

export const RatingFilter = () => {
  const [dropdown, setDropdown] = useState(false);
  const [, setSearchParams] = useSearchParams();
  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prevParams) => {
      return new URLSearchParams({
        ...Object.fromEntries(prevParams.entries()),
        rating: event.target.value,
      });
    });
  };

  return (
    <>
      <div className="flex justify-between pt-5 mb-5">
        <p className="font-medium text-[20px]">Rating</p>
        <img
          className={`${dropdown ? 'cursor-pointer' : 'rotate-180 cursor-pointer'}`}
          onClick={handleClick}
          src={dropUp}
          alt="dropup"
        />
      </div>
      <div className={`${dropdown ? 'flex flex-col gap-y-2 ' : 'hidden'}`}>
        <div className="flex items-center gap-1">
          <input type="radio" name="rating" value={5} onChange={handleChange} />
          <Rating readOnly defaultValue={5} size={'small'} />
          <p className="text-[14px]">5.0</p>
        </div>
        <div className="flex items-center gap-1">
          <input type="radio" name="rating" value={4} onChange={handleChange} />
          <Rating readOnly defaultValue={4} size={'small'} />
          <p className="text-[14px]">4.0 & up</p>
        </div>
        <div className="flex items-center gap-1">
          <input type="radio" name="rating" value={3} onChange={handleChange} />
          <Rating readOnly defaultValue={3} size={'small'} />
          <p className="text-[14px]">3.0 & up</p>
        </div>
        <div className="flex items-center gap-1">
          <input type="radio" name="rating" value={2} onChange={handleChange} />
          <Rating readOnly defaultValue={2} size={'small'} />
          <p className="text-[14px]">2.0 & up</p>
        </div>
        <div className="flex items-center gap-1 border-b pb-[26px]">
          <input type="radio" name="rating" value={1} onChange={handleChange} />
          <Rating readOnly defaultValue={1} size={'small'} />
          <p className="text-[14px]">1.0 & up</p>
        </div>
      </div>
    </>
  );
};
