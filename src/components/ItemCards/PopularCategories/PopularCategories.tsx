import { Product } from '../../../types/types.tsx';

interface Props {
  product: Product;
}

export const PopularCategories = ({ product }: Props) => {
  return (
    <>
      <div className="flex flex-col-reverse justify-center items-center w-[200px] h-[210px] border hover:border-[#2C742F] hover:text-[#2C742F] cursor-pointer">
        <p>{product.title}</p>
        <img src={product.image} alt="" />
      </div>
    </>
  );
};
