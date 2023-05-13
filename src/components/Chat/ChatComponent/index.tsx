import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { io } from 'socket.io-client';

import Error from '@/components/Error';
import LoadingSpinner from '@/components/LoadingSpinner';
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

let socket: any;
const socketInit = () => {
  socket = io('https://chat-gametrail-production.up.railway.app');
};

const ChatComponent: FC<Props> = ({ trailData }) => {
  const userCookie = getUserCookie();
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>();
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const fetchChatMessages = async (id: number) => {
      setLoading(true);
      try {
        const response = await fetch(`https://gametrail-backend-s4-production.up.railway.app/api/chatByTrailId/?trailId=${id}`);
        const userData = await response.json();
        const reverseMessages = userData.reverse();
        setMessages([...reverseMessages]);
        setError(false);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (socket !== undefined) {
      if (isFirstRender === true && socket !== undefined) {
        fetchChatMessages(trailData.id);
        socket.emit('join', trailData.id);
        setIsFirstRender(false);
      } else {
        return () => {
          socket.disconnect();
        };
      }
    }
  }, [isFirstRender, trailData.id]);

  useEffect(() => {
    if (socket !== undefined) {
      const handleReceiveMessage = (msg: Message) => {
        setMessages([...messages, msg]);
      };
      socket.on('receive_message', (msg: Message) => {
        handleReceiveMessage(msg);
      });
    }
  }, [messages]);

  const postChatMessage = async (newMessage: Message) => {
    const request = {
      trailId: trailData.id,
      text: newMessage.text,
      userId: userCookie?.id,
    };
    const url = 'https://gametrail-backend-s4-production.up.railway.app/api/chat';

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { Authorization: `Token ${userCookie?.auth_token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      });
      const response = await res.json();
      // eslint-disable-next-line no-console
      console.log({ response });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log({ err });
    }
  };

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message === '' || message === undefined) return;
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
    postChatMessage(newMessage);
    socket.emit('send_message', newMessage);
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  if (loading) return <LoadingSpinner data-testid="loading-component" />;
  if (error || !messages) return <Error data-testid="error-component" />;

  return (
    <>
      <MessagesContainer>
        <motion.div layout>
          <ChatSection messages={messages} />
        </motion.div>
      </MessagesContainer>
      <Container>
        <DivContainer data-testid="input-container">
          <form onSubmit={(e) => handleSendMessage(e)}>
            <InputField type="text" placeholder="Escribe un comentario" maxLength={350} value={message} onChange={(e) => { setMessage(e.target.value); }} />
            <Button>Enviar</Button>
          </form>
        </DivContainer>
      </Container>
    </>
  );
};
export { ChatComponent, socketInit };
