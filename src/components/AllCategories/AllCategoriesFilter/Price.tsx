import { useState } from 'react';
import { Box, Slider } from '@mui/material';

import dropUp from '../../../assets/AllCategories/dropup.svg';
import { useSearchParams } from 'react-router-dom';

export const Price = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const [priceRange, setPriceRange] = useState<number[]>([0, 70]);
  const [, setSearchParams] = useSearchParams();

  const handlePriceChange = (_: Event, newValue: number | number[]) => {
    const valueArray = Array.isArray(newValue) ? newValue : [newValue];
    setPriceRange(valueArray);

    setSearchParams((prevParams) => {
      return new URLSearchParams({
        ...Object.fromEntries(prevParams.entries()),
        price: valueArray.join(','),
      });
    });
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
      <div className={`${dropdown ? 'flex flex-col gap-y-2 ' : 'hidden'}`}>
        <Box sx={{ width: 300 }}>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={70}
            sx={{ color: '#00B307' }}
          />
          <p>
            Price: {priceRange[0]} — {priceRange[1]}
          </p>
        </Box>
      </div>
    </>
  );
};
