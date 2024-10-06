import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import tomato from '../../assets/FollowBlock/tomat.svg';
import leaf from '../../assets/FollowBlock/leaf.svg';
import leafDrop from '../../assets/FollowBlock/leaf drop.svg';
import chiliMore from '../../assets/FollowBlock/chiliMore.svg';
import leafs from '../../assets/FollowBlock/leafs.svg';
import iceOrange from '../../assets/FollowBlock/iceOrange.svg';

import { FollowBlock } from './FollowBlock.tsx';

jest.mock('../../assets/FollowBlock/tomat.svg', () => 'tomat.svg');
jest.mock('../../assets/FollowBlock/leaf.svg', () => 'leaf.svg');
jest.mock('../../assets/FollowBlock/leaf drop.svg', () => 'leaf drop.svg');
jest.mock('../../assets/FollowBlock/chiliMore.svg', () => 'chiliMore.svg');
jest.mock('../../assets/FollowBlock/leafs.svg', () => 'leafs.svg');
jest.mock('../../assets/FollowBlock/iceOrange.svg', () => 'iceOrange.svg');

describe('FollowBlock', () => {
  it('renders correctly', () => {
    render(<FollowBlock />);
    expect(screen.getByText(/Follow us on Instagram/)).toBeInTheDocument();
  });

  it('renders img', () => {
    render(<FollowBlock />);

    const imgTomato = screen.getByAltText('tomato');
    expect(imgTomato).toBeInTheDocument();

    expect(imgTomato).toHaveAttribute('src', tomato);
    expect(imgTomato).toHaveAttribute('alt', 'tomato');

    const imgLeaf = screen.getByAltText('leaf');
    expect(imgLeaf).toBeInTheDocument();

    expect(imgLeaf).toHaveAttribute('src', leaf);
    expect(imgLeaf).toHaveAttribute('alt', 'leaf');

    const imgLeafDrop = screen.getByAltText('leafDrop');
    expect(imgLeafDrop).toBeInTheDocument();

    expect(imgLeafDrop).toHaveAttribute('src', leafDrop);
    expect(imgLeafDrop).toHaveAttribute('alt', 'leafDrop');

    const imgChiliMore = screen.getByAltText('chiliMore');
    expect(imgChiliMore).toBeInTheDocument();

    expect(imgChiliMore).toHaveAttribute('src', chiliMore);
    expect(imgChiliMore).toHaveAttribute('alt', 'chiliMore');

    const imgLeafs = screen.getByAltText('leafs');
    expect(imgLeafs).toBeInTheDocument();

    expect(imgLeafs).toHaveAttribute('src', leafs);
    expect(imgLeafs).toHaveAttribute('alt', 'leafs');

    const imgIceOrange = screen.getByAltText('iceOrange');
    expect(imgIceOrange).toBeInTheDocument();

    expect(imgIceOrange).toHaveAttribute('src', iceOrange);
    expect(imgIceOrange).toHaveAttribute('alt', 'iceOrange');
  });
});
