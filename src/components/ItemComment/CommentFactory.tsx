import { Commentary } from '../../types/types.tsx';
import { CATEGORY } from '../../constants';
import { ClientTestimonials } from './ClientTestimonials/ClientTestimonials.tsx';

type Props = {
  commentary: Commentary;
};

export const CommentFactory = ({ commentary }: Props) => {
  switch (commentary.category) {
    case CATEGORY.TESTIMONIALS:
      return <ClientTestimonials commentary={commentary} />;
    default:
      return <span>Test</span>;
  }
};
