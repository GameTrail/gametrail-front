import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import type { Game } from '@/models/Game/types';
import type { User } from '@/models/User/types';
import { Container } from './styles';

export type Props = {
  comment: {
    id: number,
    text: string,
    commentedUser: User,
    userWhoComments: User,
    game: Game
  }
};

const CommentComponent: FC<Props> = ({ comment }) => (
  <Container>
    <div>
      {' '}
      principal foto
      <div>
        {' '}
        secuntario foto
        <div>
          {' '}
          foto
          <Image src={comment.userWhoComments.avatar} alt="imagen" width={50} height={50} />
        </div>
      </div>
    </div>
    <div>
      {' '}
      principal comentario
      <div>
        {' '}
        name del userWhoComments
        <p>{comment.userWhoComments.username}</p>
      </div>
      <div>
        {' '}
        comentario
        <p>{comment.text}</p>
      </div>
    </div>
  </Container>
);

export default CommentComponent;
