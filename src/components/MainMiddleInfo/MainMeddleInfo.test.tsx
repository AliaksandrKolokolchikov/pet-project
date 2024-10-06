import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { MainMiddleInfo } from './MainMiddleInfo.tsx';

jest.mock('../../assets/MainPage/delivery.svg', () => 'delivery.svg');
jest.mock('../../assets/MainPage/headphones.svg', () => 'headphones.svg');
jest.mock('../../assets/MainPage/shopping-bag.svg', () => 'shopping-bag.svg');
jest.mock('../../assets/MainPage/box.svg', () => 'box.svg');

const text = [
  'Free shipping on all your order',
  'Instant access to Support',
  'We ensure your money is save',
  '30 Days Money-Back Guarantee',
];
const altImage = ['delivery', 'headphones', 'shopping', 'box'];

describe('MainMiddleInfo', () => {
  it('renders correctly with all text', () => {
    render(<MainMiddleInfo />);

    text.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders correctly alt and src for image', () => {
    render(<MainMiddleInfo />);
    altImage.forEach((item) => {
      expect(screen.getByAltText(item)).toHaveAttribute('alt');
      expect(screen.getByAltText(item)).toHaveAttribute('src');
    });
  });
});
