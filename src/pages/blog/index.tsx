import React from 'react';
import BlogList from '@/components/Blog/BlogList';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import useBlogList from '@/hooks/useBlogList';

const BlogPage = () => {
  const { blogList, error, loading } = useBlogList();

  if (error) return <Error />;
  if (loading) return <LoadingSpinner />;
  if (!blogList) return null;

  return (
    <BlogList blogList={blogList} />
  );
};

export default BlogPage;
