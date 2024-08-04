import { Footer, Header } from '../components';
import { CartWrapper } from '../components/ItemCards/CartList/CartListWrapper.tsx';
import { useLocation } from 'react-router-dom';

export const CartPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <CartWrapper />
      <Footer />
    </>
  );
};
