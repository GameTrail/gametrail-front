import type { FC } from 'react';
import React from 'react';
import type { Comment } from '@/models/Comment/types';

import {
  AvatarContainer,
  CommentContainer,
  CommentContentContainer,
  CommentTextContainer,
  CommentUsernameContainer,
} from './styles';

export type Props = {
  comment: Comment;
};

const CommentComponent: FC<Props> = ({ comment }) => (
  <CommentContainer>
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
  </CommentContainer>
);

export default CommentComponent;
