import useSWR from 'swr';
import type { MessageToPost } from './index';

export const useLogic = () => {
  const useSWRGetMessages = (id: number) => {
    const url = 'http://localhost:3000/api/chat/trail';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fetcher = (urlToGet: string) => fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id),
    }).then((res) => res.json());
    const { data } = useSWR(url, fetcher);
    return data;
  };

  const postMessage = async (messageToPost: MessageToPost) => {
    // const url = type === 'user' ? 'http://localhost:3000/api/comment/user' : 'http://localhost:3000/api/comment/game';
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const fetcherToPost = (urlToPost: string) => fetch(url, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(commentToPost),
    // }).then((res) => res.json());
    // const { data } = useSWR(url, fetcherToPost);
    // return data;

    const url = 'http://localhost:3000/api/chat/trail';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fetcherToPost = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messageToPost),
    }).then((res) => res.json());
  };

  return {
    useSWRGetMessages, postMessage,
  };
};
