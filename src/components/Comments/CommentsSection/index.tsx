import type { FC } from 'react';
import React from 'react';
import type { Comment } from '@/models/Comment/types';
import CommentComponent from './CommentComponent';
import { CommentsContainer } from './styles';

export type Props = {
  comments: Comment[] | undefined
};

const CommentsSection: FC<Props> = ({ comments }) => {
  const handleRenderComments = () => comments?.reverse().map((comment) => <CommentComponent key={comment.id} comment={comment} />);

  return (
    <CommentsContainer>
      {handleRenderComments()}
    </CommentsContainer>
  );
};

export default CommentsSection;
