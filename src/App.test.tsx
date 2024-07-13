import { render, screen } from '@testing-library/react';
import Users from './App.tsx';

describe('User', () => {
  it('renders test component', async () => {
    render(<Users />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
