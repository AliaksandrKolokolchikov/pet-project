import { Product } from '../../model/types.tsx';

interface Props {
  product: Product;
}

export const PopularCategories = ({ product }: Props) => {
  return (
    <>
      <div className="flex">
        <p>{product.title}</p>
        <img src={product.image} alt="" />
      </div>
    </>
  );
};
