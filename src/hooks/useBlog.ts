import { useEffect, useState } from 'react';
import type { BlogItem } from '@/models/Blog/mock';

type Props = {
  id: string | string[] | undefined
};
const useBlog = ({ id }: Props) => {
  const [blog, setBlog] = useState<BlogItem | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(`/api/blog/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog().catch(() => setError(true));
  }, [id]);

  return { blog, loading, error };
};

export default useBlog;
