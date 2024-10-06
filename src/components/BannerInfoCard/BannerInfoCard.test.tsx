import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { screen, render, fireEvent } from '@testing-library/react';

import { BannerInfoCard } from './BannerInfoCard';
import { TimerBanner } from './TimerBannerInfo.tsx';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('BannerInfoCard', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders "Best Deals" and other text content', () => {
    render(
      <MemoryRouter>
        <BannerInfoCard />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Best Deals/i)).toBeInTheDocument();
    expect(screen.getByText(/85% Fat Free/i)).toBeInTheDocument();
    expect(screen.getByText(/Summer Sale/i)).toBeInTheDocument();
    expect(screen.getByText(/100% Fresh Fruit/i)).toBeInTheDocument();
    expect(screen.getByText(/Low-Fat Meat/i)).toBeInTheDocument();
  });

  it('renders "Shop now" buttons and verifies navigation', () => {
    render(
      <MemoryRouter>
        <BannerInfoCard />
      </MemoryRouter>,
    );

    const buttons = screen.getAllByText(/Shop now/i);
    expect(buttons.length).toBe(3);

    fireEvent.click(buttons[0]);
    expect(mockNavigate).toHaveBeenCalledWith('/all-categories');
  });

  it('renders TimerBanner component', () => {
    const timer = new Date();

    render(<TimerBanner expiryTimestamp={timer} />);
    expect(screen.getByText(/Days/)).toBeInTheDocument();
    expect(screen.getByText(/Hours/)).toBeInTheDocument();
    expect(screen.getByText(/Mins/)).toBeInTheDocument();
    expect(screen.getByText(/Secs/)).toBeInTheDocument();
  });

  it('renders correct CSS classes for background images', () => {
    render(
      <MemoryRouter>
        <BannerInfoCard />
      </MemoryRouter>,
    );

    const avocadoBg = screen.getByText(/Best Deals/i).closest('div');
    expect(avocadoBg).toHaveClass('bg-avocado-bg');

    const meatBg = screen.getByText(/85% Fat Free/i).closest('div');
    expect(meatBg).toHaveClass('bg-meat-bg');

    const fruitBg = screen.getByText(/Summer Sale/i).closest('div');
    expect(fruitBg).toHaveClass('bg-fruit-bg');
  });
});
