import { Product } from '../../../types/types.tsx';

interface Props {
  product: Product;
}

export const PopularCategories = ({ product }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[200px] h-[210px] border hover:border-[#2C742F] hover:text-[#2C742F] cursor-pointer">
        <img src={product.image} alt="product" />
        <p className="mt-2">{product.title}</p>
      </div>
    </>
  );
};
