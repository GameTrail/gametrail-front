import type { FC } from 'react';
import React from 'react';
import DateInfo from '@/components/TrailDetails/InfoRow/DateInfo';
import type { Trail as TrailData } from '@/models/Trail/types';
import {
  InfoRow, JoinButton, JoinContainer, JoinPlayersCount,
} from './styles';

export type Props = {
  trailData: TrailData;
};

const PlusInfoRow: FC<Props> = ({ trailData }) => (
  <InfoRow>
    <DateInfo dateStart={trailData.startDate} dateEnd={trailData.endDate} />
    <JoinContainer>
      <JoinButton>
        <p>UNIRSE</p>
      </JoinButton>
      <JoinPlayersCount>
        <p>
          ‍🙍
        </p>
        <p>
          3/4
        </p>
      </JoinPlayersCount>

    </JoinContainer>

  </InfoRow>
);

export default PlusInfoRow;
