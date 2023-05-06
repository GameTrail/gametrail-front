import React from 'react';
import { useRouter } from 'next/router';
import BlogDetails from '@/components/Blog/BlogDetails';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import useBlog from '@/hooks/useBlog';

const BlogDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { blog, loading, error } = useBlog({ id });

  if (error) return <Error />;
  if (loading) return <LoadingSpinner />;
  if (!blog) return null;

  return (
    <BlogDetails blog={blog} />
  );
};

export default BlogDetailsPage;
