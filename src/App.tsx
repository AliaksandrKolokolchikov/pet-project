import './index.css';

import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants';

import { CartPage, ContactPage, MainPage } from './pages';
import { SignInPage, SignUpPage } from './pages';
import { AllCategoriesPage } from './pages/AllCategoriesPage.tsx';
import { WishListPage } from './pages/WishListPage.tsx';
import { CheckoutPage } from './pages/CheckoutPage.tsx';
import { AboutUsPage } from './pages/AboutUsPage.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.MAIN_NESTED} element={<MainPage />} />
        <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTES.ALL_CATEGORIES} element={<AllCategoriesPage />} />
        <Route path={ROUTES.CART} element={<CartPage />} />
        <Route path={ROUTES.WISHLIST} element={<WishListPage />} />
        <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
        <Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
