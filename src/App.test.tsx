import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { ROUTES } from './constants';
import { store } from './store';

jest.mock('./pages', () => ({
  CartPage: jest.fn().mockReturnValue(<div>Cart Page</div>),
  MainPage: jest.fn().mockReturnValue(<div>MainPage</div>),
  AllCategoriesPage: jest.fn().mockReturnValue(<div>AllCategoriesPage</div>),
  WishListPage: jest.fn().mockReturnValue(<div>WishListPage</div>),
  CheckoutPage: jest.fn().mockReturnValue(<div>CheckoutPage</div>),
  AboutUsPage: jest.fn().mockReturnValue(<div>AboutUsPage</div>),
  ContactPage: jest.fn().mockReturnValue(<div>ContactPage</div>),
  SignInPage: jest.fn().mockReturnValue(<div>SignInPage</div>),
  SignUpPage: jest.fn().mockReturnValue(<div>SignUpPage</div>),
}));

const renderFunction = (route: string) => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
      ,
    </Provider>,
  );
};

it('renders MainPage when navigating to main route', () => {
  renderFunction(ROUTES.MAIN_NESTED);
  const mainPageElement = screen.getByText(/MainPage/i);
  expect(mainPageElement).toBeInTheDocument();
});

it('renders SignInPage when navigating to sign-in route', () => {
  renderFunction(ROUTES.SIGN_IN);
  const signInPageElement = screen.getByText(/SignInPage/i);
  expect(signInPageElement).toBeInTheDocument();
});

it('renders SignUpPage when navigating to sign-up route', () => {
  renderFunction(ROUTES.SIGN_UP);
  const signUpPageElement = screen.getByText(/SignUpPage/i);
  expect(signUpPageElement).toBeInTheDocument();
});

it('renders AllCategoriesPage when navigating to all-categories route', () => {
  renderFunction(ROUTES.ALL_CATEGORIES);
  const allCategoriesPageElement = screen.getByText(/AllCategoriesPage/i);
  expect(allCategoriesPageElement).toBeInTheDocument();
});
