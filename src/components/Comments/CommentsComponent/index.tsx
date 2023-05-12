import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import type { CommentsUser } from '@/models/Comment/types';
import type { Game } from '@/models/Game/types';
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

export type CommentToPostGame = {
  userWhoComments: number;
  game: number;
  commentText: string;
};

export type Props = {
  data: User | Game;
  type: string;
};

const CommentsComponent: FC<Props> = ({ data, type }) => {
  const user = getUserCookie();
  const [commentsArray, setCommentsArray] = useState<CommentsUser [] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [post, setPost] = useState(false);

  const postComment = async (commentToPost: CommentToPostUser | CommentToPostGame) => {
    const url = 'gametrail-backend-s4-production.up.railway.app/api/comment';

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { Authorization: `Token ${user?.auth_token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(commentToPost),
      });
      const response = await res.json();
      // eslint-disable-next-line no-console
      console.log({ response });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log({ err });
    }
  };

  const onClickNewComment = (input: string) => {
    if (input === '' || input === undefined) return;

    let commentToPost;
    if (type === 'user') {
      commentToPost = {
        userWhoComments: user?.id ?? 1,
        userCommented: data.id,
        commentText: input,
      };
    } else {
      commentToPost = {
        userWhoComments: user?.id ?? 1,
        game: data.id,
        commentText: input,
      };
    }
    postComment(commentToPost);
    setPost(!post);
  };

  useEffect(() => {
    const fetchUser = async (id: number) => {
      setLoading(true);
      try {
        const response = await fetch(`gametrail-backend-s4-production.up.railway.app/api/user/${id}/`);
        const userData = await response.json();
        setCommentsArray(userData.comments_received);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const fetchGameDetails = async (id: number) => {
      setLoading(true);
      try {
        const gameDetailsResponse = await fetch(`gametrail-backend-s4-production.up.railway.app/api/game/${id}/`);
        const gameDetailsData = await gameDetailsResponse.json();
        setCommentsArray(gameDetailsData.comments_games);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (type === 'user') {
      fetchUser(data.id);
    } else {
      fetchGameDetails(data.id);
    }
  }, [post, type, data.id]);

  if (loading) return <LoadingSpinner data-testid="loading-component" />;
  if (error || !data) return <Error data-testid="error-component" />;
  return (
    <Container data-testid="comments-component">
      <InputFieldSection onClickNewComment={onClickNewComment} />
      <CommentsSection comments={commentsArray} />
    </Container>
  );
};
export default CommentsComponent;
