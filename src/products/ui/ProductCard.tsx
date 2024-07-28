import { Product } from '../model/types.tsx';
import { PopularCategories } from './PopularCategories/PopularCategories.tsx';

interface ProductCard {
  product: Product;
}

const ProductCard = ({ product }: ProductCard) => {
  switch (product.category) {
    case 'popular':
      return <PopularCategories product={product} />;
    default:
      return <span>¯\_(ツ)_/¯</span>;
  }
};

export default ProductCard;
