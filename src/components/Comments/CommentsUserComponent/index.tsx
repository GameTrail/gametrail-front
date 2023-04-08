import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import type { CommentsUser } from '@/models/Comment/types';
import type { User } from '@/models/User/types';
import { getUserCookie } from '@/utils/login';
import CommentsSection from '../CommentsSection';
import InputFieldSection from '../InputFieldSection';
import { Container } from './styles';

export type CommentToPostUser = {
  userWhoComments: number;
  userCommented: number;
  commentText: string;
};

export type Props = {
  userData: User;
};

const CommentsUserContainer: FC<Props> = ({ userData }) => {
  const user = getUserCookie();
  const [commentsArray, setCommentsArray] = useState<CommentsUser [] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [post, setPost] = useState(false);

  const postComment = async (commentToPost: CommentToPostUser) => {
    const url = 'https://gametrail-backend-production-8fc0.up.railway.app/api/comment';

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { Authorization: `Token ${user?.auth_token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(commentToPost),
      });
      const data = await res.json();
      // eslint-disable-next-line no-console
      console.log({ data });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log({ err });
    }
  };

  const onClickNewComment = (input: string) => {
    if (input === '' || input === undefined) return;

    const commentToPost = {
      userWhoComments: user?.id ?? 1,
      userCommented: userData.id,
      commentText: input,
    };
    postComment(commentToPost);
    setPost(!post);
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Se ha ejecutado el useEffect de CommentsUserContainer');
    const fetchUser = async (id: number) => {
      setLoading(true);
      try {
        const response = await fetch(`https://gametrail-backend-production-8fc0.up.railway.app/api/user/${id}/`);
        const data = await response.json();
        setCommentsArray(data.comments_received);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchUser(userData.id);
  }, [post, userData.id]);

  if (loading) return <LoadingSpinner />;
  if (error || !userData) return <Error />;
  return (
    <Container>
      <InputFieldSection onClickNewComment={onClickNewComment} />
      <CommentsSection comments={commentsArray} />
    </Container>
  );
};
export default CommentsUserContainer;
