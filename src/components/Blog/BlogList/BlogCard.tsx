import type { FC } from 'react';
import { CardContent } from '@/containers/TrailList/styles';
import type { BlogItem } from '@/models/Blog/mock';
import {
  Author,
  CardImage, CardWrapper, BlogDate, Title,
} from './styles';

type Props = {
  blog: BlogItem
  onPressNavigate: (id: string) => void;
};
const BlogCard: FC<Props> = ({ blog, onPressNavigate }) => (
  <CardWrapper onClick={() => onPressNavigate(blog.id)}>
    <CardImage src={blog.image} alt={blog.title} />
    <CardContent>
      <BlogDate>{blog.date}</BlogDate>
      <Title>{blog.shortTitle}</Title>
      <Author>{blog.author}</Author>
    </CardContent>

  </CardWrapper>
);

export default BlogCard;
