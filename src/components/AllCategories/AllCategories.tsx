import { useSearchParams } from 'react-router-dom';

import { AllCategoriesCard } from '../../constants/CARD_LIST.ts';
import { AllCategoriesBlock } from './AllCategoriesBlock.tsx';

export const AllCategories = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const rating = searchParams.get('rating');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');

  return (
    <>
      {AllCategoriesCard.filter((item) => {
        const categoryMatch = categoryFilter
          ? item.type === categoryFilter
          : true;
        const ratingMatch = rating
          ? item.rating! >= parseInt(rating, 10)
          : true;
        const priceMatch =
          minPrice || maxPrice
            ? (minPrice ? item.price! === String(minPrice) : true) ===
              (maxPrice ? item.price! === String(maxPrice) : true)
            : true;
        return categoryMatch && ratingMatch && priceMatch;
      }).map((item) => (
        <AllCategoriesBlock product={item} key={item.id + item.title} />
      ))}
    </>
  );
};
