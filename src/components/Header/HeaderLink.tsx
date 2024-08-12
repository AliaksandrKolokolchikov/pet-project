import { ReactNode } from 'react';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop.tsx';
import { ROUTES } from '../../constants';
import { useLocation } from 'react-router-dom';

type Props = {
  children?: ReactNode;
};

const highlightPaths = [
  ROUTES.CART,
  ROUTES.WISHLIST,
  ROUTES.CHECKOUT,
  ROUTES.ABOUT_US,
  ROUTES.CONTACT,
];

export const HeaderLink = ({ children }: Props) => {
  const location = useLocation();
  const isHighlighted = highlightPaths.includes(location.pathname as ROUTES);
  const textColor = isHighlighted ? 'hover:text-[#00B307]' : 'hover:text-white';
  return (
    <>
      <div className={`${textColor} cursor-pointer ml-8`}>
        {children}
        <ScrollToTop />
      </div>
    </>
  );
};
