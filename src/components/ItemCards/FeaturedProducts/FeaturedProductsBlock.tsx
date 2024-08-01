import { ProductWrapper } from '../ProductsWrapper.tsx';
import { CardFactory } from '../CardFactory.tsx';
import { FeaturedProducts } from '../../../constants/CARD_LIST.ts';

export const FeaturedProductsBlock = () => {
  return (
    <>
      <ProductWrapper title={'Featured Products'}>
        {FeaturedProducts.map((item) => (
          <CardFactory product={item} key={item.id} />
        ))}
      </ProductWrapper>
    </>
  );
};
