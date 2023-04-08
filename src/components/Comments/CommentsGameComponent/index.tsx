import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
import type { CommentsGame } from '@/models/Comment/types';
import type { Game } from '@/models/Game/types';
import { getUserCookie } from '@/utils/login';
import CommentsSection from './CommentsSection';
import InputFieldSection from './InputFieldSection';
import { Container } from './styles';

export type CommentToPostGame = {
  userWhoComments: number;
  game: number;
  commentText: string;
};

export type Props = {
  gameData: Game;
};

const CommentsGameContainer: FC<Props> = ({ gameData }) => {
  const user = getUserCookie();
  const [commentsArray, setCommentsArray] = useState<CommentsGame[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [post, setPost] = useState(false);

  const postComment = async (commentToPost: CommentToPostGame) => {
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
      game: gameData.id,
      commentText: input,
    };
    postComment(commentToPost);
    setPost(!post);
  };

  useEffect(() => {
    const fetchGameDetails = async (id: number) => {
      setLoading(true);
      try {
        const gameDetailsResponse = await fetch(`https://gametrail-backend-production-8fc0.up.railway.app/api/game/${id}/`);
        const gameDetailsData = await gameDetailsResponse.json();
        setCommentsArray(gameDetailsData.comments_games);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchGameDetails(gameData.id);
  }, [post, gameData.id]);

  if (loading) return <LoadingSpinner />;
  if (error || !gameData) return <Error />;
  return (
    <Container>
      <InputFieldSection onClickNewComment={onClickNewComment} />
      <CommentsSection comments={commentsArray} />
    </Container>
  );
};
export default CommentsGameContainer;
