import type { FC } from 'react';
import React from 'react';
import type { CommentsGame, CommentsUser } from '@/models/Comment/types';
import CommentBox from './CommentBox';
import { CommentsContainer } from './styles';

export type Props = {
  comments: (CommentsUser | CommentsGame)[] | null;
};

const CommentsSection: FC<Props> = ({ comments }) => {
  const handleRenderComments = () => {
    const sortedComments = comments?.slice().reverse();
    return sortedComments?.map((comment) => <CommentBox key={comment.id} comment={comment} />);
  };

  return (
    <CommentsContainer>
      {handleRenderComments()}
    </CommentsContainer>
  );
};

export default CommentsSection;
