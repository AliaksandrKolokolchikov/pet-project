import { ReactNode } from 'react';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop.tsx';

type Props = {
  children?: ReactNode;
};

export const Link = ({ children }: Props) => {
  return (
    <>
      <div
        className={`${
          location.pathname === '/cart' ||
          location.pathname === '/wishlist' ||
          location.pathname === '/checkout' ||
          location.pathname === '/about' ||
          location.pathname === '/contact'
            ? `hover:text-[#00B307]`
            : `hover:text-white`
        } cursor-pointer ml-8`}
      >
        {children}
        <ScrollToTop />
      </div>
    </>
  );
};
