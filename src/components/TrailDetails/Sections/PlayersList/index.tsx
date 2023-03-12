import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  PlayerListContainer,
  PlayerListElement, PlayerListHeader, PlayerName, PlayerValue, ProfilePicture,
} from '@/components/TrailDetails/Sections/PlayersList/styles';
import type { User as UserData } from '@/models/User/types';

export type Props = {
  usersData: UserData[];
};

const PlayersList: FC<Props> = ({ usersData }) => (
  <Container>
    <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ type: 'spring' }}>
      <PlayerListHeader>
        <h2>Jugadores</h2>
        <h2>Valoración</h2>
      </PlayerListHeader>

      <PlayerListContainer key="users-list">
        {usersData.map((user) => (

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
              {// We need to average all ratings for this user
                                user.rating.reduce((a, b, c) => a + c, 0) / user.rating.length
                            }
              /5 ⭐
            </PlayerValue>

          </PlayerListElement>

        ))}
      </PlayerListContainer>

    </motion.div>
  </Container>

);

export default PlayersList;
