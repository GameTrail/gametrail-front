import type { FC } from 'react';
import React from 'react';
import type { Message } from '@/models/Message/types';
import MessageComponent from './MessageComponent';
import { ChatContainer } from './styles';

export type Props = {
  messages: Message[];
};

const ChatSection: FC<Props> = ({ messages }) => {
  const handleRenderComments = () => messages.map((message) => <MessageComponent key={message.id} message={message} />);

  return (
    <ChatContainer>
      {handleRenderComments()}
    </ChatContainer>
  );
};

export default ChatSection;
