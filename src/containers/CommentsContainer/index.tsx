import type { FC } from 'react';
import React, { useState } from 'react';

import { CommentsSection, InputFieldSection } from '@/components/Comments';
import { MOCK_GAME_COMMENTS, MOCK_USER_COMMENTS } from '@/models/Comment/mock';
import type { Comment } from '@/models/Comment/types';
import { Container } from './styles';

export type Props = {
  comments: Comment[]
};

const CommentsContainer: FC<Props> = ({ comments }) => {
  const [commentsArray, setCommentsArray] = useState(comments);
  const [input, setInput] = useState('');

  const onClickNewComment = () => {
    if (input !== '' && input.length > 0) {
      const text = input;
      const commentToAdd = {
        id: commentsArray.length + 1,
        text,
        commentedUser: MOCK_USER_COMMENTS[0].commentedUser,
        userWhoComments: MOCK_USER_COMMENTS[0].userWhoComments,
        game: MOCK_GAME_COMMENTS[0].game,
      };
      const updatedCommentedArray = [...commentsArray];
      updatedCommentedArray.splice(0, 0, commentToAdd);
      setCommentsArray(updatedCommentedArray);
      setInput('');
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setInput(text);
  };

  return (
    <Container>
      <InputFieldSection input={input} onClickNewComment={onClickNewComment} handleInput={handleInput} />
      <CommentsSection comments={commentsArray} />
    </Container>
  );
};
export default CommentsContainer;
