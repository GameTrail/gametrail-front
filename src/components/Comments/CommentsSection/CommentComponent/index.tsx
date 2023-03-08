import React, { FC } from 'react';
import { Container } from './styles';
import { Game } from '@/models/Game/types';
import { User } from '@/models/User/types';

export type Props = {
  comment: {
    id: number,
    text: string,
    commentedUser: User,
    userWhoComments: User,
    game: Game
  }
}

const CommentComponent: FC<Props> = ({ comment }) => (
  <Container>
    <div> principal foto
      <div> secuntario foto
        <div> foto
          <img src={comment.userWhoComments.avatar} />
        </div>
      </div>
    </div>
    <div> principal comentario
      <div> name del userWhoComments
        <p>{comment.userWhoComments.username}</p>
      </div>
      <div> comentario
        <p>{comment.text}</p>
      </div>
    </div>
  </Container>
);

export default CommentComponent;
