import { useEffect, useState } from 'react';
import type { BlogItem } from '@/models/Blog/mock';

const useBlogList = () => {
  const [blogList, setBlogList] = useState<BlogItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogList = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch('/api/blog');
        const data = await res.json();
        setBlogList(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogList();
  }, []);

  return { blogList, loading, error };
};

export default useBlogList;
