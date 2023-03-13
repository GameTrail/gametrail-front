import useSWR from 'swr';
import type { CommentToPostGame, CommentToPostUser } from '.';

export const useLogic = () => {
  const useSWRGetComments = (id: number, type: string) => {
    const url = type === 'user' ? 'http://localhost:3000/api/comment/user' : 'http://localhost:3000/api/comment/game';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fetcher = (urlToGet: string) => fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id),
    }).then((res) => res.json());
    const { data } = useSWR(url, fetcher);
    return data;
  };

  const postComment = async (type: string, commentToPost: CommentToPostUser | CommentToPostGame) => {
    // const url = type === 'user' ? 'http://localhost:3000/api/comment/user' : 'http://localhost:3000/api/comment/game';
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const fetcherToPost = (urlToPost: string) => fetch(url, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(commentToPost),
    // }).then((res) => res.json());
    // const { data } = useSWR(url, fetcherToPost);
    // return data;

    const url = type === 'user' ? 'http://localhost:3000/api/comment/user' : 'http://localhost:3000/api/comment/game';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fetcherToPost = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(commentToPost),
    }).then((res) => res.json());
  };

  return {
    useSWRGetComments, postComment,
  };
};