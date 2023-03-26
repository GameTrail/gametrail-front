import type { FC } from 'react';
import React, { useState } from 'react';
import { CommentsSection, InputFieldSection } from '@/components/Comments';
import { useGameTrail } from '@/hooks';
import type { CommentsGame } from '@/models/Comment/types';
import type { Game } from '@/models/Game/types';
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
  const comments = gameData.comments_game === undefined ? [] : gameData.comments_game;
  const { user, token } = useGameTrail();
  const [commentsArray, setCommentsArray] = useState<CommentsGame[]>(comments);

  const postComment = async (commentToPost: CommentToPostGame) => {
    const url = 'https://gametrail-backend-production.up.railway.app/api/comment';

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(commentToPost),
      });
      const data = await res.json();
      // eslint-disable-next-line no-console
      console.log({ data });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ error });
    }
  };

  const onClickNewComment = (input: string) => {
    if (input === '' || input === undefined) return;

    const commentToPost = {
      userWhoComments: user?.id ?? 1,
      game: gameData.id,
      commentText: input,
    };
    const newComment = {
      id: commentsArray.length + 1,
      commentText: input,
      userWhoComments: {
        id: user?.id ?? null,
        username: user?.username ?? '',
        avatar: user?.avatar ?? '',
      },
      game: gameData.id,
    };
    const updatedCommentedArray = [...commentsArray];
    updatedCommentedArray.splice(0, 0, newComment);
    setCommentsArray(updatedCommentedArray);
    postComment(commentToPost);
  };

  return (
    <Container>
      <InputFieldSection onClickNewComment={onClickNewComment} />
      <CommentsSection comments={commentsArray} />
    </Container>
  );
};
export default CommentsGameContainer;
