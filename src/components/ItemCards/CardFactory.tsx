import { CATEGORY } from '../../constants';
import { Product, ProductCart } from '../../types/types.tsx';
import { PopularCategories } from './PopularCategories';
import { PopularProducts } from './PopularProducts';
import { HotDeals } from './HotDeals';
import { FeaturedProducts } from './FeaturedProducts';

type Props = {
  product: Product | ProductCart;
  index?: number;
};

export const CardFactory = ({ product }: Props) => {
  switch (product.category) {
    case CATEGORY.POPULAR:
      return <PopularCategories product={product} />;
    case CATEGORY.PRODUCTS:
      return <PopularProducts product={product} />;
    case CATEGORY.DEALS:
      return <HotDeals product={product} />;
    case CATEGORY.FEATURED:
      return <FeaturedProducts product={product} />;
    default:
      return <span>Test</span>;
  }
};
