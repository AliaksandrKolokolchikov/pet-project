import { useSearchParams } from 'react-router-dom';

import { AllCategoriesCard } from '../../constants/CARD_LIST.ts';
import { AllCategoriesBlock } from './AllCategoriesBlock.tsx';
import { getPrice } from '../../utils.ts';

export const AllCategories = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const rating = searchParams.get('rating');
  const price = searchParams.get('price')?.split(',');

  return (
    <>
      {AllCategoriesCard.filter((item) => {
        const categoryMatch = categoryFilter
          ? item.type === categoryFilter
          : true;
        const ratingMatch = rating
          ? item.rating! >= parseInt(rating, 10)
          : true;
        const priceMatch = price
          ? getPrice(item.price!) >= Number(price[0]) &&
            getPrice(item.price!) <= Number(price[1])
          : true;
        return categoryMatch && ratingMatch && priceMatch;
      }).map((item) => (
        <AllCategoriesBlock product={item} key={item.id + item.title} />
      ))}
    </>
  );
};
