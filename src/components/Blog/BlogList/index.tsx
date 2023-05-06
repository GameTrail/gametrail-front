import type { FC } from 'react';
import React from 'react';
import { useRouter } from 'next/router';
import type { BlogItem } from '@/models/Blog/mock';
import BlogCard from './BlogCard';
import { Container, MainTitle } from './styles';

type Props = {
  blogList: BlogItem[];
};
const BlogList: FC<Props> = ({ blogList }) => {
  const router = useRouter();

  const onPressNavigate = (id: string) => {
    router.push(`/blog/${id}`);
  };

  const renderBlogList = () => blogList.map((blog) => (
    <BlogCard key={blog.id} blog={blog} onPressNavigate={onPressNavigate} />
  ));

  return (
    <>
      <MainTitle>GameTrail Blog</MainTitle>
      <Container>
        {renderBlogList()}
      </Container>
    </>
  );
};

export default BlogList;
