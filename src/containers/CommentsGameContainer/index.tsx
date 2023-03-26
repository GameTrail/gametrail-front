import type { FC } from 'react';
import React, { useState } from 'react';
import { CommentsSection, InputFieldSection } from '@/components/Comments';
import { useGameTrail } from '@/hooks';
import type { CommentsGame, CommentsUser } from '@/models/Comment/types';
import { useLogic } from './logic';
import { Container } from './styles';
import { Game } from '@/models/Game/types';

export type CommentToPostGame = {
  auth_token: string | null;
  userId: number | null;
  gameId: number;
  text: string;
};

export type Props = {
  gameData: Game;
  comments: CommentsGame[];
};

const CommentsContainer: FC<Props> = ({ gameData, comments }) => {
  const { postComment } = useLogic();
  const { user, token } = useGameTrail();
  const [commentsArray, setCommentsArray] = useState<(CommentsGame)[]>(comments);

  const onClickNewComment = (input: string) => {
    if (input !== '' && input !== undefined) {
      const text = input;
      let commentToPost: CommentToPostGame;
      let newComment;
      if (type === 'user') {
        commentToPost = {
          auth_token: token,
          userId: user?.id,
          commentedUserId: data.id,
          text,
        };

        newComment = {
          id: commentsArray.length + 1,
          text,
          userWhoComments: {
            id: user?.id,
            username: user?.username,
            avatar: user?.avatar,
          },
          commentedUser: {
            id: data.id,
            username: data.username,
            avatar: 'https://cdn.pixabay.com/photo/2017/10/22/17/54/wolf-2878633_1280.jpg',
          },
        };
      } else {
        commentToPost = {
          auth_token: token,
          userId: user.id,
          gameId: commentedId,
          text,
        };

        newComment = {
          id: commentsArray.length + 1,
          text,
          gameId: 1,
          userWhoComments: {
            id: 1,
            username: 'LuisUsrDev',
            avatar: 'https://cdn.pixabay.com/photo/2017/12/25/22/52/tiger-3039280_1280.jpg',
          },
        };
      }
      const updatedCommentedArray = [...commentsArray];
      updatedCommentedArray.splice(0, 0, newComment);
      postComment(type, commentToPost);
      setCommentsArray(updatedCommentedArray);
    }
  };

  if (commentsArray === undefined) return <div>Loading...</div>;
  return (
    <Container>
      <InputFieldSection onClickNewComment={onClickNewComment} />
      <CommentsSection comments={commentsArray} />
    </Container>
  );
};
export default CommentsContainer;
