import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { ChatSection } from '@/components/Chat';
import type { Message } from '@/models/Message/types';
import type { Trail } from '@/models/Trail/types';
// import { useLogic } from './logic';
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
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    socket.emit('join', trailData.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    const currentDate = new Date();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const newMessage = {
      id: messages.length + 1,
      text: message || '',
      creationDate: `${(currentDate.getMonth() + 1).toString()}/${currentDate.getDate().toString()}/${currentDate.getFullYear().toString()}`,
      user: {
        id: user.id,
        username: user.username,
        avatar: user.avatar,
      },
      trail: trailData,
    };
    socket.emit('send_message', newMessage);
    e.preventDefault();
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
export default ChatContainer;
