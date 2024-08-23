import { useSearchParams } from 'react-router-dom';

import { AllCategoriesCard } from '../../constants/CARD_LIST.ts';
import { AllCategoriesBlock } from './AllCategoriesBlock.tsx';

export const AllCategories = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const rating = searchParams.get('rating');
  return (
    <>
      {AllCategoriesCard.filter((item) => {
        const categoryMatch = categoryFilter
          ? item.type === categoryFilter
          : true;
        const ratingMatch = rating
          ? item.rating! >= parseInt(rating, 10)
          : true;
        return categoryMatch && ratingMatch;
      }).map((item) => (
        <AllCategoriesBlock product={item} key={item.id + item.title} />
      ))}
    </>
  );
};
