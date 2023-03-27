import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { ChatSection } from '@/components/Chat';
import type { Message } from '@/models/Message/types';
import type { Trail } from '@/models/Trail/types';

import { getUserCookie } from '@/utils/login';
import {
  Button, Container, DivContainer, InputField, MessagesContainer,
} from './styles';

export type MessageToPost = {
  userId: number;
  username: string;
  trailId: number;
  text: string;
};

export type Props = {
  trailData: Trail;
};

const socket = io('https://chat-gametrail.vercel.app:3001');

const ChatContainer: FC<Props> = ({ trailData }) => {
  const userCookie = getUserCookie();
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    socket.emit('join', trailData.id);
  }, [trailData.id]);

  useEffect(() => {
    const handleReceiveMessage = (msg: Message) => {
      setMessages([...messages, msg]);
    };
    socket.on('receive_message', (msg: Message) => {
      handleReceiveMessage(msg);
    });

    return () => {
      socket.off('receive_message');
    };
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentDate = new Date();

    const newMessage = {
      id: messages.length + 1,
      text: message || '',
      creationDate: `${(currentDate.getMonth() + 1).toString()}/${currentDate.getDate().toString()}/${currentDate.getFullYear().toString()}`,
      user: {
        id: userCookie?.id,
        username: userCookie?.username,
        avatar: userCookie?.avatar,
      },
      trail: trailData,
    };
    socket.emit('send_message', newMessage);
    // setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <>
      <MessagesContainer>
        <ChatSection messages={messages} />
      </MessagesContainer>
      <Container>
        <DivContainer>
          <form onSubmit={(e) => handleSendMessage(e)}>
            <InputField type="text" placeholder="Escribe un comentario" value={message} onChange={(e) => { setMessage(e.target.value); }} />
            <Button>Enviar</Button>
          </form>
        </DivContainer>
      </Container>
    </>
  );
};
export default ChatContainer;
