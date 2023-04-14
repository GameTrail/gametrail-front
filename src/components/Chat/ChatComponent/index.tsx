import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import type { Message } from '@/models/Message/types';
import type { Trail } from '@/models/Trail/types';

import { getUserCookie } from '@/utils/login';
import ChatSection from '../ChatSection';
import {
  Button, Container, DivContainer, InputField, MessagesContainer,
} from './styles';

export type Props = {
  trailData: Trail;
};

const socket = io('https://chat-gametrail-production.up.railway.app');

const ChatComponent: FC<Props> = ({ trailData }) => {
  const userCookie = getUserCookie();
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>();
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    socket.emit('join', trailData.id);
    setIsFirstRender(false);
    if (isFirstRender === false) {
      return () => {
        // eslint-disable-next-line no-console
        console.log('Se ha desconectado del server de Socket.io');
        socket.disconnect();
      };
    }
  }, [isFirstRender, trailData.id]);

  useEffect(() => {
    const handleReceiveMessage = (msg: Message) => {
      setMessages([...messages, msg]);
    };
    socket.on('receive_message', (msg: Message) => {
      handleReceiveMessage(msg);
    });
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
    setMessages([...messages, newMessage]);
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
export default ChatComponent;
