import { CardList } from '../../../constants/CARD_LIST.ts';
import { CardFactory } from '../CardFactory.tsx';
import { ProductWrapper } from '../ProductsWrapper.tsx';

export const PopularCategoriesBlock = () => {
  return (
    <>
      <ProductWrapper title={'Popular Categories'}>
        {CardList.map((item) => (
          <CardFactory product={item} key={item.id + item.title} />
        ))}
      </ProductWrapper>
    </>
  );
};
