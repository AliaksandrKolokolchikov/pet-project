import './index.css';

import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants';

import { CartPage, ContactPage, MainPage, UserDashboard } from './pages';
import { SignInPage, SignUpPage } from './pages';
import { AllCategoriesPage } from './pages';
import { WishListPage } from './pages';
import { CheckoutPage } from './pages';
import { AboutUsPage } from './pages';

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
        <Route path={ROUTES.DASHBOARD} element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
