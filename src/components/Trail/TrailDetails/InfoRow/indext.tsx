import type { FC } from 'react';
import React from 'react';
import DateInfo from '@/components/Trail/TrailDetails/InfoRow/DateInfo';
import type { Trail as TrailData } from '@/models/Trail/types';
import {
  InfoRow, JoinButton, JoinContainer, JoinPlayersCount,
} from './styles';

export type Props = {
  trailData: TrailData;
};

const PlusInfoRow: FC<Props> = ({ trailData }) => (
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
          {trailData.users.length}
          /
          {trailData.maxPlayers}
        </p>
      </JoinPlayersCount>

    </JoinContainer>

  </InfoRow>
);

export default PlusInfoRow;
