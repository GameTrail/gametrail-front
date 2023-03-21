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

const socket = io('http://localhost:3001');

const ChatContainer: FC<Props> = ({ trailData }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>();

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
    // e.preventDefault(); Evitamos que se recargue la página
    const currentDate = new Date();
    const newMessage = {
      id: messages.length + 1,
      text: message || '',
      creationDate: `${(currentDate.getMonth() + 1).toString()}/${currentDate.getDate().toString()}/${currentDate.getFullYear().toString()}`,
      user: {
        id: 3,
        username: 'wolf223',
        profilePicture: 'https://cdn.pixabay.com/photo/2017/10/22/17/54/wolf-2878633_1280.jpg',
      },
      trail: trailData,
    };
    socket.emit('send_message', newMessage);
    e.preventDefault();
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  // if (messagesArray === undefined) return <div>Loading...</div>;
  return (
    <>
      <MessagesContainer>
        <ChatSection messages={messages} />
      </MessagesContainer>
      <Container>
        <DivContainer>
          {/* Ponemos un form para que envíe con un enter */}
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
