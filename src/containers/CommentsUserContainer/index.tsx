import type { FC } from 'react';
import React, { useState } from 'react';
import { CommentsSection, InputFieldSection } from '@/components/Comments';
import type { CommentsUser } from '@/models/Comment/types';
import type { User } from '@/models/User/types';
import { getUserCookie } from '@/utils/login';
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
  const comments = userData.comments_received === undefined ? [] : userData.comments_received;
  const user = getUserCookie();
  const [commentsArray, setCommentsArray] = useState<(CommentsUser)[]>(comments);

  const postComment = async (commentToPost: CommentToPostUser) => {
    const url = 'https://gametrail-backend-production.up.railway.app/api/comment';

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { Authorization: `Token ${user?.auth_token}`, 'Content-Type': 'application/json' },
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
      userCommented: userData.id,
      commentText: input,
    };

    const newComment = {
      id: commentsArray.length + 1,
      commentText: input,
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
    updatedCommentedArray.push(newComment);
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
export default CommentsUserContainer;
