import { AllCategoriesCard } from '../../constants/CARD_LIST.ts';
import { AllCategoriesBlock } from './AllCategoriesBlock.tsx';

export const AllCategories = () => {
  return (
    <>
      {AllCategoriesCard.map((item) => (
        <AllCategoriesBlock product={item} key={item.id + item.title} />
      ))}
    </>
  );
};
