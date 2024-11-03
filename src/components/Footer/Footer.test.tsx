import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { FooterSub } from './FooterSub.tsx';
import { FooterInfo } from './FooterInfo.tsx';
import Secure from '../../assets/Footer/Cart.svg';
import Logo from '../../assets/Header/Logo.svg';
import ApplePay from '../../assets/Footer/ApplePay.svg';
import Visa from '../../assets/Footer/Visa.svg';
import Discover from '../../assets/Footer/Discover.svg';
import MasterCard from '../../assets/Footer/Mastercard.svg';
import Facebook from '../../assets/Footer/facebook 1.svg';
import Twitter from '../../assets/Footer/twitter 1.svg';
import Pinterest from '../../assets/Footer/pinterest 1.svg';
import Instagram from '../../assets/Footer/instagram 1.svg';

jest.mock('../../assets/Header/Logo.svg', () => 'Logo.svg');
jest.mock('../../assets/Footer/ApplePay.svg', () => 'ApplePay.svg');
jest.mock('../../assets/Footer/Visa.svg', () => 'Visa.svg');
jest.mock('../../assets/Footer/Discover.svg', () => 'Discover.svg');
jest.mock('../../assets/Footer/Mastercard.svg', () => 'MasterCard.svg');
jest.mock('../../assets/Footer/Secure.svg', () => 'Secure.svg');
jest.mock('../../assets/Footer/Facebook.svg', () => 'facebook 1.svg');
jest.mock('../../assets/Footer/Twitter.svg', () => 'twitter 1.svg');
jest.mock('../../assets/Footer/Instagram.svg', () => 'instagram 1.svg');
jest.mock('../../assets/Footer/Pinterest.svg', () => 'pinterest 1.svg');

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const altImage = [
  'Logo',
  'ApplePay',
  'Visa',
  'Discover',
  'MasterCard',
  'Secure',
];

describe('FooterInfo', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <FooterInfo />
      </MemoryRouter>,
    );
    expect(screen.getAllByText(/Ecobazar/));

    const registerButton = screen.getByText(/Ecobazar/);
    expect(registerButton).toBeInTheDocument();

    fireEvent.click(registerButton);
    expect(window.location.pathname).toBe('/');
  });

  it('renders image correctly', () => {
    render(
      <MemoryRouter>
        <FooterInfo />
      </MemoryRouter>,
    );

    altImage.forEach((item) => {
      expect(screen.getByAltText(item)).toHaveAttribute('alt');
    });
    expect(screen.getByAltText(/Secure/)).toHaveAttribute('src', Secure);
    expect(screen.getByAltText(/Logo/)).toHaveAttribute('src', Logo);
    expect(screen.getByAltText(/ApplePay/)).toHaveAttribute('src', ApplePay);
    expect(screen.getByAltText(/Visa/)).toHaveAttribute('src', Visa);
    expect(screen.getByAltText(/Discover/)).toHaveAttribute('src', Discover);
    expect(screen.getByAltText(/MasterCard/)).toHaveAttribute(
      'src',
      MasterCard,
    );
  });
});

describe('FooterSub', () => {
  it('renders without crashing', () => {
    render(<FooterSub />);
    expect(screen.getByText(/Subcribe our Newsletter/)).toBeInTheDocument();
  });

  it('renders correctly input and button', () => {
    render(<FooterSub />);
    expect(
      screen.getByPlaceholderText(/Your email adress/),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Subscribe/ }),
    ).toBeInTheDocument();
  });

  it('renders correctly attribute src and alt for image', () => {
    const altImage = ['Facebook', 'Twitter', 'Pinterest', 'Instagram'];
    render(<FooterSub />);
    altImage.forEach((item) => {
      expect(screen.getByAltText(item)).toHaveAttribute('alt');
    });

    expect(screen.getByAltText('Facebook')).toHaveAttribute('src', Facebook);
    expect(screen.getByAltText('Twitter')).toHaveAttribute('src', Twitter);
    expect(screen.getByAltText('Pinterest')).toHaveAttribute('src', Pinterest);
    expect(screen.getByAltText('Instagram')).toHaveAttribute('src', Instagram);
  });

  it('renders correctly href for img', () => {
    render(<FooterSub />);

    const FacebookHref = screen.getByRole('link', { name: /Facebook/ });
    expect(FacebookHref).toBeInTheDocument();
    fireEvent.click(FacebookHref);
    expect(FacebookHref).toHaveAttribute('href', 'https://www.facebook.com/');

    const TwitterHref = screen.getByRole('link', { name: /Twitter/ });
    expect(TwitterHref).toBeInTheDocument();
    fireEvent.click(TwitterHref);
    expect(TwitterHref).toHaveAttribute('href', 'https://www.twitter.com/');

    const PinterestHref = screen.getByRole('link', { name: /Pinterest/ });
    expect(PinterestHref).toBeInTheDocument();
    fireEvent.click(PinterestHref);
    expect(PinterestHref).toHaveAttribute('href', 'https://www.pinterest.com/');

    const InstagramHref = screen.getByRole('link', { name: /Instagram/ });
    expect(InstagramHref).toBeInTheDocument();
    fireEvent.click(InstagramHref);
    expect(InstagramHref).toHaveAttribute('href', 'https://www.instagram.com/');
  });
});
