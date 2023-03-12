import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import type { CommentUser } from '@/models/Comment/mock';
import type { Game } from '@/models/Game/types';
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
    commentedUser: CommentUser,
    userWhoComments: CommentUser,
    game: Game
  }
};

const CommentComponent: FC<Props> = ({ comment }) => (
  <CommentContainer>
    <AvatarContainer>
      <Image src={comment.userWhoComments.profilePicture} alt="imagen" width={30} height={30} />
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
