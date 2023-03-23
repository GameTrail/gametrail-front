import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  PlayerListContainer,
  PlayerListElement, PlayerListHeader, PlayerName, PlayerValue, ProfilePicture,
} from '@/components/Trail/TrailDetails/Sections/PlayersList/styles';
import type { Rating } from '@/models/Rating/types';
import type { Trail } from '@/models/Trail/types';
import type { User as UserData } from '@/models/User/types';

export type Props = {
  trailData: Trail;
};

function getAverageRating(ratings: Rating[]): number | string {
  return ratings.map((rating: Rating) => rating.rating).reduce((a: number, b: number) => a + b, 0) / ratings.length;
}

const PlayerRating: FC<{ User: UserData }> = ({ User }) => {
  if (!User.rating) {
    return <>No 🙈</>;
  }
  return (
    <>
      {// We need to average all ratings for this user
            getAverageRating(User.rating)
        }
      /
      {User.rating.length}
      {' '}
      ⭐
    </>
  );
};

const PlayersList: FC<Props> = ({ trailData }) => (
  <Container>
    <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ type: 'spring' }}>
      <PlayerListHeader>
        <h2>Jugadores</h2>
        <h2>Valoración</h2>
      </PlayerListHeader>

      <PlayerListContainer key="users-list">
        {trailData.users.map((user) => (

          <PlayerListElement key={user.id}>
            <ProfilePicture
              src="/defaults/profile/default-avatar.png"
              alt={user.username}
            />
            <PlayerName>
              @
              {user.username}
            </PlayerName>
            <PlayerValue>
              <PlayerRating User={user} />
            </PlayerValue>

          </PlayerListElement>

        ))}
      </PlayerListContainer>

    </motion.div>
  </Container>

);

export default PlayersList;
