import type { CommentToPostUser } from '.';

export const useLogic = () => {
  const postComment = (commentToPost: CommentToPostUser) => {
    console.log('Comentario que voy a postear ', commentToPost);
    const url = 'https://gametrail-backend-production.up.railway.app/api/comment';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(commentToPost),
    });
  };

  return { postComment };
};
