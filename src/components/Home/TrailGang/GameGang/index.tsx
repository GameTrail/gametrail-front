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
  trailGang: TrailGangProps;
};

const GameGang:FC<Props> = ({ trailGang }) => (
  <GangContainer>
    <Title> Esta vez aparecemos en la pantalla de inicio!! </Title>
    <UsersContainer>
      <ProfilePicture src={trailGang.players[0].avatar} alt="jvegax profile picture" width={50} height={50} />
      <PlayerData>
        {trailGang.players[0].username}
      </PlayerData>
    </UsersContainer>
    <UsersContainer>
      <ProfilePicture src={trailGang.players[1].avatar} alt="josmarlop profile picture" width={50} height={50} />
      <PlayerData>
        {trailGang.players[1].username}
      </PlayerData>
    </UsersContainer>
    <UsersContainer>
      <ProfilePicture src={trailGang.players[2].avatar} alt="joscacgom profile picture" width={50} height={50} />
      <PlayerData>
        {trailGang.players[2].username}
      </PlayerData>
    </UsersContainer>

    <AuxContainer>
      <DataContainer>
        <DataText>
          {trailGang.games.length}
          {' '}
          Juegos 🎮
        </DataText>
      </DataContainer>
      <DataContainer>
        <DataText>
          📆
          {' '}
          {trailGang.startDate}
        </DataText>
      </DataContainer>
    </AuxContainer>
  </GangContainer>
);

export default GameGang;
