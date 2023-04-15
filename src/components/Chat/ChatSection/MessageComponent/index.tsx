import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import type { Message } from '@/models/Message/types';
import {
  AvatarContainer,
  CommentContainer,
  CommentContentContainer,
  CommentTextContainer,
  CommentUsernameContainer,
} from './styles';

export type Props = {
  message: Message;
};

const MessageComponent: FC<Props> = ({ message }) => (
  <CommentContainer>
    <AvatarContainer>
      <Image src={message.user.avatar ?? ''} alt="imagen" width={60} height={60} />
    </AvatarContainer>
    <CommentContentContainer>
      <CommentUsernameContainer>
        <p>
          @
          {message.user.username}
          {'        '}
          #
          {message.user.id}
        </p>
      </CommentUsernameContainer>
      <CommentTextContainer>
        <p>{message.text}</p>
      </CommentTextContainer>
    </CommentContentContainer>
  </CommentContainer>
);

export default MessageComponent;
