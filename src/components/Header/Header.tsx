import { HeaderAuth } from './HeaderAuth.tsx';
import { HeaderSearch } from './HeaderSearch.tsx';
import { HeaderNavLink } from './HeaderNavLink.tsx';

export const Header = () => {
  return (
    <>
      <HeaderAuth />
      <HeaderSearch />
      <HeaderNavLink />
    </>
  );
};
