import { Product } from '../model/types.tsx';

export const CardList = [
  {
    title: 'Fresh Fruit',
    category: 'popular',
    image: './src/products/image/fruit.svg',
    id: 1,
  },
  {
    title: 'Fresh Vegetables',
    category: 'popular',
    image: './src/products/image/vegetable.svg',
    id: 2,
  },
  {
    title: 'Meat & Fish',
    category: 'popular',
    image: './src/products/image/fish.svg',
    id: 3,
  },
  {
    title: 'Snacks',
    category: 'popular',
    image: './src/products/image/snacks.svg',
    id: 4,
  },
  {
    title: 'Beverages',
    category: 'popular',
    image: './src/products/image/beverages.svg',
    id: 5,
  },
  {
    title: 'Beauty & Health',
    category: 'popular',
    image: './src/products/image/beauty.svg',
    id: 6,
  },
  {
    title: 'Bread & Bakery',
    category: 'popular',
    image: './src/products/image/bread.svg',
    id: 7,
  },
  {
    title: 'Baking Needs',
    category: 'popular',
    image: './src/products/image/baking.svg',
    id: 8,
  },
  {
    title: 'Cooking',
    category: 'popular',
    image: './src/products/image/cooking.svg',
    id: 9,
  },
  {
    title: 'Diabetic Food',
    category: 'popular',
    image: './src/products/image/diabetic.svg',
    id: 10,
  },
  {
    title: 'Dish Detergents',
    category: 'popular',
    image: './src/products/image/dish.svg',
    id: 11,
  },
  {
    title: 'Oil',
    category: 'popular',
    image: './src/products/image/oil.svg',
    id: 12,
  },
];

export const PopularImages = ({ title, image }: Product) => {
  return (
    <div>
      <img src={image} alt="images" />
      <p className="text-center">{title}</p>
      <p></p>
    </div>
  );
};
