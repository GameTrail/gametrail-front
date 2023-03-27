import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';
import type { Message } from '@/models/Message/types';
import MessageComponent from './MessageComponent';
import { ChatContainer } from './styles';

export type Props = {
  messages: Message[];
};

const ChatSection: FC<Props> = ({ messages }) => {
  const lastElement = useRef<HTMLDivElement>(null);
  const handleRenderComments = () => messages.map((message) => <MessageComponent key={message.id} message={message} />);

  useEffect(() => {
    if (lastElement.current) {
      lastElement.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <ChatContainer>
      {handleRenderComments()}
      <div ref={lastElement} />
    </ChatContainer>
  );
};

export default ChatSection;
