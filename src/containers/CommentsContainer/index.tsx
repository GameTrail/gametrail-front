import type { FC } from 'react';
import React, { useState } from 'react';

import { CommentsSection, InputFieldSection } from '@/components/Comments';
import { MOCK_GAME_COMMENTS } from '@/models/Comment/mock';
import type { Game } from '@/models/Game/types';

export type Props = {
  game: Game
};

const CommentsContainer: FC<Props> = ({ game }) => {
  const { comments } = game;
  const [commentsArray, setCommentsArray] = useState(comments);
  const [input, setInput] = useState('');

  const handleNewComment = () => {
    const text = input;
    const commentToAdd = {
      id: commentsArray.length + 1,
      text,
      commentedUser: MOCK_GAME_COMMENTS[0].commentedUser,
      userWhoComments: MOCK_GAME_COMMENTS[0].userWhoComments,
      game: MOCK_GAME_COMMENTS[0].game,
    };
    const updatedCommentedArray = [...commentsArray];
    updatedCommentedArray.splice(0, 0, commentToAdd);
    setCommentsArray(updatedCommentedArray);
    setInput('');
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setInput(text);
  };

  return (
    <>
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }} />
      <InputFieldSection input={input} handleNewComment={handleNewComment} handleInput={handleInput} />
      <CommentsSection comments={commentsArray} />
      <div style={{ paddingTop: '10px', paddingBottom: '10px' }} />
    </>
  );
};
export default CommentsContainer;
