import { HeaderAuth } from '../Header/HeaderAuth.tsx';
import { HeaderSearch } from '../Header/HeaderSearch.tsx';
import { HeaderNavLink } from '../Header/HeaderNavLink.tsx';

export const MainPage = () => {
  return (
    <>
      <HeaderAuth />
      <HeaderSearch />
      <HeaderNavLink />
    </>
  );
};
