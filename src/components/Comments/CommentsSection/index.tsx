import type { FC } from 'react';
import React from 'react';
import type { Comment } from '@/models/Comment/types';
import CommentComponent from './CommentComponent';
import { Container } from './styles';

export type Props = {
  comments: Comment[] | undefined
};

const CommentsSection: FC<Props> = ({ comments }) => (
  <Container>
    {comments?.map((comment) => <CommentComponent key={comment.id} comment={comment} />)}
  </Container>
);

export default CommentsSection;
