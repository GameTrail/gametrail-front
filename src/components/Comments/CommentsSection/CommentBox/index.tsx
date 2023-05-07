import type { FC } from 'react';
import React from 'react';
import { MotionCommentsContainerVariants } from '@/components/Comments/CommentsSection/styles';
import type { Comment } from '@/models/Comment/types';

import {
  AvatarContainer,
  CommentContentContainer,
  CommentTextContainer,
  CommentUsernameContainer, MotionCommentContainer,
} from './styles';

export type Props = {
  comment: Comment;
};

const CommentBox: FC<Props> = ({ comment }) => (
  <MotionCommentContainer
    variants={MotionCommentsContainerVariants}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.5 }}
  >
    <AvatarContainer>
      <img src={comment.userWhoComments?.avatar ?? ''} alt="imagen" width={30} height={30} />
    </AvatarContainer>
    <CommentContentContainer>
      <CommentUsernameContainer>
        <p>
          @
          {comment.userWhoComments?.username}
          {'        '}
          #
          {comment.userWhoComments?.id}
        </p>
      </CommentUsernameContainer>
      <CommentTextContainer>
        <p>{comment.commentText}</p>
      </CommentTextContainer>
    </CommentContentContainer>
  </MotionCommentContainer>
);

export default CommentBox;
