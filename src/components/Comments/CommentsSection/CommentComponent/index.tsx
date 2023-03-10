import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import type { Game } from '@/models/Game/types';
import type { User } from '@/models/User/types';
import {
  AvatarContainer,
  CommentContainer,
  CommentContentContainer,
  CommentTextContainer,
  CommentUsernameContainer,
} from './styles';

export type Props = {
  comment: {
    id: number,
    text: string,
    commentedUser: User,
    userWhoComments: User,
    game: Game
  }
};

const CommentComponent: FC<Props> = ({ comment }) => (
  <CommentContainer>
    <AvatarContainer>
      <Image src={comment.userWhoComments.avatar} alt="imagen" width={100} height={100} />
    </AvatarContainer>
    <CommentContentContainer>
      <CommentUsernameContainer>
        <p>
          @
          {comment.userWhoComments.username}
          {'        '}
          #
          {comment.userWhoComments.id}
        </p>
      </CommentUsernameContainer>
      <CommentTextContainer>
        <p>{comment.text}</p>
      </CommentTextContainer>
    </CommentContentContainer>
  </CommentContainer>
);

export default CommentComponent;
