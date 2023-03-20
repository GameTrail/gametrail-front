import type { FC } from 'react';
import React from 'react';
import DateInfo from '@/components/Trail/TrailDetails/InfoRow/DateInfo';
import type { Trail as TrailData } from '@/models/Trail/types';
import type { User } from '@/models/User/types';
import {
  InfoRow, JoinButton, JoinContainer, JoinPlayersCount,
} from './styles';

export type Props = {
  trailData: TrailData;
  usersData: User [];
};

const PlusInfoRow: FC<Props> = ({ trailData, usersData }) => (
  <InfoRow>
    <DateInfo dateStart={trailData.startDate} dateEnd={trailData.finishDate} />
    <JoinContainer>
      <JoinButton>
        <p>UNIRSE</p>
      </JoinButton>
      <JoinPlayersCount>
        <p>
          ‍🙍
        </p>
        <p>
          {usersData.length}
          /
          {trailData.maxPlayers}
        </p>
      </JoinPlayersCount>

    </JoinContainer>

  </InfoRow>
);

export default PlusInfoRow;
