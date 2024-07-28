import { CATEGORY } from '../../constants';
import { PopularCategories } from './PopularCategories/PopularCategories.tsx';
import { Product } from '../../types/types.tsx';

type Props = {
  product: Product;
};

export const CardFactory = ({ product }: Props) => {
  switch (product.category) {
    case CATEGORY.POPULAR:
      return <PopularCategories product={product} />;
    default:
      return <span>Test</span>;
  }
};
