import type { FC } from 'react';
import React from 'react';
import type { TrailGang as TrailGangProps } from '@/models/Trail/types';
import {
  AuxContainer,
  DataContainer,
  DataText,
  GangContainer,
  PlayerData,
  Title,
  UsersContainer,
  ProfilePicture,
} from './styles';

export type Props = {
  trailGangData: TrailGangProps;
};

const GameGang:FC<Props> = ({ trailGangData }) => (
  <GangContainer>
    <Title> Esta vez aparecemos en la pantalla de inicio!! </Title>
    <UsersContainer>
      <ProfilePicture src={trailGangData.players[0].profilePicture} alt="jvegax profile picture" width={50} height={50} />
      <PlayerData>
        {trailGangData.players[0].username}
      </PlayerData>
    </UsersContainer>
    <UsersContainer>
      <ProfilePicture src={trailGangData.players[1].profilePicture} alt="josmarlop profile picture" width={50} height={50} />
      <PlayerData>
        {trailGangData.players[1].username}
      </PlayerData>
    </UsersContainer>
    <UsersContainer>
      <ProfilePicture src={trailGangData.players[2].profilePicture} alt="joscacgom profile picture" width={50} height={50} />
      <PlayerData>
        {trailGangData.players[2].username}
      </PlayerData>
    </UsersContainer>

    <AuxContainer>
      <DataContainer>
        <DataText>
          {trailGangData.games.length}
          {' '}
          Juegos 🎮
        </DataText>
      </DataContainer>
      <DataContainer>
        <DataText>
          📆
          {' '}
          {trailGangData.startDate}
        </DataText>
      </DataContainer>
    </AuxContainer>
  </GangContainer>
);

export default GameGang;
