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
import type { User, User as UserData } from '@/models/User/types';

export type Props = {
  trailData: Trail;
};

function getAverageRating(ratings: Rating[]): number | string {
  return ratings.map((rating: Rating) => rating.rating).reduce((a: number, b: number) => a + b, 0) / ratings.length;
}

const PlayerRating: FC<{ User: UserData }> = ({ User }) => {
  if (!User.rate_recieved) {
    return <>No 🙈</>;
  }
  return (
    <>
      {// We need to average all ratings for this user
            getAverageRating(User.rate_recieved)
        }
      /
      {User.rate_recieved.length}
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
              {/* This should be changed when users are good. */}
              <PlayerRating User={(user as unknown as User)} />
            </PlayerValue>

          </PlayerListElement>

        ))}
      </PlayerListContainer>

    </motion.div>
  </Container>

);

export default PlayersList;
