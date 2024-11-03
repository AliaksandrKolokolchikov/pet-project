import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import { ScrollToTop } from '../ScrollToTop';
import { ROUTES } from '../../constants';
import { isSpecialRoute } from '../../utils.ts';

type Props = {
  children?: ReactNode;
};

export const HeaderLink = ({ children }: Props) => {
  const location = useLocation();
  const textColor = isSpecialRoute(location.pathname as ROUTES)
    ? 'hover:text-[#00B307]'
    : 'hover:text-white';

  return (
    <>
      <div className={`${textColor} cursor-pointer ml-8`}>
        {children}
        <ScrollToTop />
      </div>
    </>
  );
};
