import { ROUTES } from './constants';

const highlightPaths = [
  ROUTES.CART,
  ROUTES.WISHLIST,
  ROUTES.CHECKOUT,
  ROUTES.ABOUT_US,
  ROUTES.CONTACT,
];

export const isSpecialRoute = (pathname: string): boolean => {
  return highlightPaths.includes(pathname as ROUTES);
};
