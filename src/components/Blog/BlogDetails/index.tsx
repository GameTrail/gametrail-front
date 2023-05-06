import type { FC } from 'react';
import React from 'react';
import type { BlogItem } from '@/models/Blog/mock';
import {
  Author, Container, Content, Date, Image, Title,
} from './styles';

type Props = {
  blog: BlogItem;
};
const BlogDetails: FC<Props> = ({ blog }) => (
  <Container>
    <Title>{blog.title}</Title>
    <Author>{blog.author}</Author>
    <Date>{blog.date}</Date>
    <Image src={blog.image} alt={blog.title} />
    <Content dangerouslySetInnerHTML={{ __html: blog.content }} />
  </Container>
);

export default BlogDetails;
