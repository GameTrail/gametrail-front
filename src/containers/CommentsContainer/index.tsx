import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import { CommentsSection, InputFieldSection } from '@/components/Comments';
import type { CommentsGame, CommentsUser } from '@/models/Comment/types';
import { useLogic } from './logic';
import { Container } from './styles';

export type CommentToPostUser = {
  auth_token: string;
  userId: number;
  commentedUserId: number;
  text: string;
};

export type CommentToPostGame = {
  auth_token: string;
  userId: number;
  gameId: number;
  text: string;
};

export type Props = {
  auth_token: string;
  id: number;
  type: string;
};

const CommentsContainer: FC<Props> = ({ auth_token, id, type }) => {
  const { useSWRGetComments, postComment } = useLogic();
  const nameProp = type === 'user' ? 'commentsUser' : 'commentsGame';
  const [commentsArray, setCommentsArray] = useState<(CommentsUser | CommentsGame)[]>([]);
  const data = useSWRGetComments(id, type);

  useEffect(() => {
    // Controlamos aquí que mientras que SWR no devuelva la petición, no actualice el estado
    if (data !== undefined) {
      setCommentsArray(data[nameProp]);
    }
  }, [data, nameProp]);

  const onClickNewComment = (input: string) => {
    if (input !== '' && input !== undefined) {
      const text = input;
      let commentToPost: CommentToPostUser | CommentToPostGame;
      let newComment;
      if (type === 'user') {
        commentToPost = {
          auth_token,
          userId: 2,
          commentedUserId: id,
          text,
        };

        newComment = {
          id: commentsArray.length + 1,
          text,
          userWhoComments: {
            id: 2,
            username: 'LuisUsrDev',
            avatar: 'https://cdn.pixabay.com/photo/2017/12/25/22/52/tiger-3039280_1280.jpg',
          },
          commentedUser: {
            id: 1,
            username: 'jvegax',
            avatar: 'https://cdn.pixabay.com/photo/2017/10/22/17/54/wolf-2878633_1280.jpg',
          },
        };
      } else {
        commentToPost = {
          auth_token,
          userId: 2,
          gameId: id,
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
