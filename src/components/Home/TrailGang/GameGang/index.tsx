import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import type { TrailGang as TrailGangProps } from '@/models/Trail/types';
import {
  AuxContainer,
  DataContainer,
  DataText,
  GangContainer, ImgContainer, PlayerData, Title, UsersContainer,
} from './styles';

export type Props = {
  trailGang: TrailGangProps;
};

const GameGang:FC<Props> = ({ trailGang }) => (
  <GangContainer>
    <Title>
      Esta vez aparecemos en la pantalla de inicio!!
    </Title>
    <UsersContainer>
      {trailGang.players[0].username}
      <ImgContainer>
        <Image src={trailGang.players[0].profilePicture} alt="none" width={50} height={50} />
      </ImgContainer>
    </UsersContainer>
    <UsersContainer>
      {trailGang.players[1].username}
      {' '}
      <ImgContainer>
        <Image src={trailGang.players[1].profilePicture} alt="none" width={50} height={50} />
      </ImgContainer>
    </UsersContainer>
    <UsersContainer>
      <ImgContainer>
        <Image src={trailGang.players[2].profilePicture} alt="none" width={50} height={50} />
        <PlayerData>
          {trailGang.players[2].username}
        </PlayerData>
      </ImgContainer>
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
