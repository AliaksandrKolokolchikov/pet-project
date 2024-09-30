import { TestimonialItem } from '../../../constants';
import { CommentFactory } from '../CommentFactory.tsx';
import { CommentWrapper } from '../CommentWrapper.tsx';

export const ClientTestimonialsBlock = () => {
  return (
    <>
      <CommentWrapper title={'Client Testimonials'}>
        {TestimonialItem.map((item) => (
          <CommentFactory commentary={item} key={item.id} />
        ))}
      </CommentWrapper>
    </>
  );
};
