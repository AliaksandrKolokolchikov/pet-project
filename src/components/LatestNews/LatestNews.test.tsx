import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import { LatestNews } from './LatestNews.tsx';
import { ArrowIcon } from '../Icons/ArrowIcon.tsx';

import note from '../../assets/LatestNews/note.svg';
import admin from '../../assets/LatestNews/admin.svg';
import comments from '../../assets/LatestNews/comments.svg';

jest.mock('../../assets/LatestNews/note.svg', () => 'note.svg');
jest.mock('../../assets/LatestNews/admin.svg', () => 'admin.svg');
jest.mock('../../assets/LatestNews/comments.svg', () => 'comments.svg');

describe('LatestNews', () => {
  it('renders without crashing', () => {
    render(<LatestNews />);
    expect(screen.getByText(/Latest News/)).toBeInTheDocument();
  });

  it('renders correctly role', () => {
    render(<LatestNews />);
    const role = screen.getAllByText('By Admin');

    role.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  it('renders correctly ArrowIcon', () => {
    render(<ArrowIcon />);

    const arrow = screen.getAllByText('Created with Pixso.');
    arrow.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  it('renders correctly image', () => {
    render(<LatestNews />);
    const imgNote = screen.getAllByAltText('note');
    expect(imgNote).toHaveLength(3);

    const imgAdmin = screen.getAllByAltText('admin');
    expect(imgAdmin).toHaveLength(3);

    const imgComments = screen.getAllByAltText('comments');
    expect(imgComments).toHaveLength(3);

    imgNote.forEach((item) => {
      expect(item).toHaveAttribute('alt', 'note');
      expect(item).toHaveAttribute('src', note);
    });

    imgAdmin.forEach((item) => {
      expect(item).toHaveAttribute('alt', 'admin');
      expect(item).toHaveAttribute('src', admin);
    });

    imgComments.forEach((item) => {
      expect(item).toHaveAttribute('alt', 'comments');
      expect(item).toHaveAttribute('src', comments);
    });
  });

  it('renders correct CSS classes for background images', () => {
    render(<LatestNews />);

    const pieceOrange = screen.getByText(/Nov/).closest('div');
    expect(pieceOrange).toBeInTheDocument();

    const eggBg = screen.getByText(/Jan/).closest('div');
    expect(eggBg).toBeInTheDocument();

    const salad = screen.getByText(/Feb/).closest('div');
    expect(salad).toBeInTheDocument();
  });
});
