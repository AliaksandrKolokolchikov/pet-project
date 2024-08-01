import { ProductWrapper } from '../ProductsWrapper.tsx';
import { CardFactory } from '../CardFactory.tsx';
import { PopularProducts } from '../../../constants/CARD_LIST.ts';

export const PopularProductsBlock = () => {
  return (
    <>
      <ProductWrapper title={'Popular Products'}>
        {PopularProducts.map((item) => (
          <CardFactory product={item} key={item.id} />
        ))}
      </ProductWrapper>
    </>
  );
};
