import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { HeaderAuth } from './HeaderAuth.tsx';
import { HeaderSearch } from './HeaderSearch.tsx';
import { isSpecialRoute } from '../../utils.ts';
import { HeaderLink } from './HeaderLink.tsx';
import { ROUTES } from '../../constants';
import cartReducer from '../../store/cart/cartSlicer.ts';
import Map from '../../assets/Header/Map Pin.svg';
import Arrow from '../../assets/Header/Arrow down.svg';
import Search from '../../assets/Header/Search.svg';

jest.mock('../../assets/Header/Map Pin.svg', () => 'Map Pin.svg');
jest.mock('../../assets/Header/Arrow down.svg', () => 'Arrow down.svg');
jest.mock('../../assets/Header/Search.svg', () => 'Search.svg');
jest.mock('../../utils.ts', () => ({
  isSpecialRoute: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('HeaderAuth', () => {
  (isSpecialRoute as jest.Mock).mockReturnValue(true);
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <HeaderAuth />
      </MemoryRouter>,
    );
    expect(isSpecialRoute).toHaveBeenCalled();
    expect(
      screen.getByText(/Store Location: Lincoln- 344, Illinois, Chicago, USA/),
    ).toBeInTheDocument();
  });

  it('renders correctly attribute scr and alt for img', () => {
    const altImage = ['Arrow down', 'Your location', 'Arrow down USD'];
    render(
      <MemoryRouter>
        <HeaderAuth />
      </MemoryRouter>,
    );
    altImage.forEach((item) => {
      expect(screen.getByAltText(item)).toHaveAttribute('alt');
    });

    const arrowDowns = screen.getAllByAltText(/Arrow down/);
    arrowDowns.forEach((item) => {
      expect(item).toBeInTheDocument();
      expect(item).toHaveAttribute('src', Arrow);
    });
    const mapImage = screen.getByAltText(/Your location/);
    expect(mapImage).toBeInTheDocument();
    expect(mapImage).toHaveAttribute('src', Map);
  });
});

beforeAll(() => {
  window.scrollTo = jest.fn();
});

describe('HeaderLink', () => {
  it('renders with special routes', () => {
    (isSpecialRoute as jest.Mock).mockReturnValue(true);
    render(
      <MemoryRouter initialEntries={[ROUTES.CONTACT]}>
        <HeaderLink>Test</HeaderLink>
      </MemoryRouter>,
    );
    const linkElement = screen.getByText('Test');
    expect(linkElement).toBeInTheDocument();
  });
});

describe('HeaderNavLink', () => {
  it('renders nav correctly', () => {
    (isSpecialRoute as jest.Mock).mockReturnValue(true);
    render(
      <MemoryRouter>
        <HeaderLink>About Us</HeaderLink>
        <HeaderLink>Contact Us</HeaderLink>
      </MemoryRouter>,
    );
    const aboutUs = screen.getByText('About Us');
    expect(aboutUs).toBeInTheDocument();
    const contactUS = screen.getByText('Contact Us');
    expect(contactUS).toBeInTheDocument();
  });

  it('call navigate correctly', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <span onClick={() => mockNavigate('/about')}>
          <HeaderLink>About Us</HeaderLink>
        </span>
        <div className="flex">
          <span onClick={() => mockNavigate('/contact')}>
            <HeaderLink>Contact Us</HeaderLink>
          </span>
        </div>
      </MemoryRouter>,
    );

    const aboutUs = screen.getByText('About Us');
    expect(aboutUs).toBeInTheDocument();
    fireEvent.click(aboutUs.closest('span')!);
    expect(mockNavigate).toHaveBeenCalledWith('/about');

    const contactUS = screen.getByText('Contact Us');
    expect(contactUS).toBeInTheDocument();
    fireEvent.click(contactUS.closest('span')!);
    expect(mockNavigate).toHaveBeenCalledWith('/contact');
  });
});

describe('HeaderSearch', () => {
  const mockNavigate = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

  const initialState = {
    cart: {
      price: '100',
      countOfProducts: 3,
      products: [],
    },
  };

  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer, // Используем редьюсер корзины
      },
      preloadedState: initialState, // Передаем начальное состояние
    });
  });

  it('renders the HeaderSearch component with correct state values', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HeaderSearch />
        </MemoryRouter>
      </Provider>,
    );
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();

    const price = screen.getByText(/100/);
    expect(price).toBeInTheDocument();

    const countNumber = screen.getByText(/3/);
    expect(countNumber).toBeInTheDocument();
  });

  it('navigates to cart when cart icon is clicked', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HeaderSearch />
        </MemoryRouter>
      </Provider>,
    );

    const wishlist = screen.getByTestId('wishlist-button');
    expect(wishlist).toBeInTheDocument();
    fireEvent.click(wishlist);
    expect(mockNavigate).toHaveBeenCalledWith('/wishlist');
  });

  it('shows and hides the popUp when the cart icon is clicked', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HeaderSearch />
        </MemoryRouter>
      </Provider>,
    );

    const cartIcon = screen.getByTestId('cart-button');
    fireEvent.click(cartIcon);
    const popUp = screen.getByText(/Shopping Card/);
    expect(popUp).toBeInTheDocument();
    fireEvent.click(cartIcon);
    expect(popUp).not.toBeInTheDocument();
  });

  it('show input search is correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HeaderSearch />
        </MemoryRouter>
      </Provider>,
    );

    const search = screen.getByPlaceholderText(/Search/);
    expect(search).toBeInTheDocument();

    const imageSearch = screen.getByAltText(/Search/);
    expect(imageSearch).toHaveAttribute('alt');
    expect(imageSearch).toHaveAttribute('src', Search);
  });
});
