import type { FC } from 'react';
import React, { useState } from 'react';
import { CommentsSection, InputFieldSection } from '@/components/Comments';
import { useGameTrail } from '@/hooks';
import type { CommentsUser } from '@/models/Comment/types';
import type { User } from '@/models/User/types';
import { useLogic } from './logic';
import { Container } from './styles';

export type CommentToPostUser = {
  auth_token: string | null;
  userId: number | null;
  commentedUserId: number | null;
  text: string;
};

export type Props = {
  userData: User;
  comments: CommentsUser[];
};

const CommentsUserContainer: FC<Props> = ({ userData, comments }) => {
  const { postComment } = useLogic();
  const { user, token } = useGameTrail();
  const [commentsArray, setCommentsArray] = useState<(CommentsUser)[]>(comments);

  const onClickNewComment = (input: string) => {
    if (input !== '' && input !== undefined) {
      const text = input;
      const commentToPost = {
        auth_token: token,
        userId: user?.id ?? null,
        commentedUserId: userData.id,
        text,
      };

      const newComment = {
        id: commentsArray.length + 1,
        text,
        userWhoComments: {
          id: user?.id ?? null,
          username: user?.username ?? 'Guest',
          avatar: user?.avatar ?? '',
        },
        commentedUser: {
          id: userData.id,
          username: userData.username,
          avatar: userData.avatar,
        },
      };
      const updatedCommentedArray = [...commentsArray];
      updatedCommentedArray.splice(0, 0, newComment);
      postComment(commentToPost);
      setCommentsArray(updatedCommentedArray);
    }
  };

  return (
    <Container>
      <InputFieldSection onClickNewComment={onClickNewComment} />
      <CommentsSection comments={commentsArray} />
    </Container>
  );
};
export default CommentsUserContainer;
