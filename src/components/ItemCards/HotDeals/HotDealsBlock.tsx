import { ProductWrapper } from '../ProductsWrapper.tsx';
import { CardFactory } from '../CardFactory.tsx';
import { HotDeals } from '../../../constants/CARD_LIST.ts';

export const HotDealsBlock = () => {
  return (
    <>
      <ProductWrapper title={'Hot Deals'} isGrid>
        {HotDeals.map((item) => (
          <CardFactory product={item} key={item.id + item.title} />
        ))}
      </ProductWrapper>
    </>
  );
};
