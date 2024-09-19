import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import { CompanyBlock } from '../CompanyBlock';

describe('CompanyBlock', () => {
  it('renders correctly', () => {
    render(<CompanyBlock />);
    const descs = screen.getAllByText('Created with Pixso.');

    descs.forEach((desc) => {
      expect(desc).toBeInTheDocument();
    });
  });
});
