import { ProductWrapper } from '../ProductsWrapper.tsx';
import { CardFactory } from '../CardFactory.tsx';
import { HotDeals } from '../../../constants/CARD_LIST.ts';

export const HotDealsBlock = () => {
  return (
    <>
      <ProductWrapper title={'Hot Deals'}>
        {HotDeals.map((item) => (
          <CardFactory product={item} key={item.id} />
        ))}
      </ProductWrapper>
    </>
  );
};
