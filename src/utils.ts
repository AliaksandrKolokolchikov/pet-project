import { ROUTES } from './constants';

const highlightPaths = [
  ROUTES.CART,
  ROUTES.WISHLIST,
  ROUTES.CHECKOUT,
  ROUTES.ABOUT_US,
  ROUTES.CONTACT,
  ROUTES.ALL_CATEGORIES,
];

export const isSpecialRoute = (pathname: string): boolean => {
  return highlightPaths.includes(pathname as ROUTES);
};

export const getPrice = (price: string): number => {
  return Math.floor(Number(price.replace('$', '')));
};
