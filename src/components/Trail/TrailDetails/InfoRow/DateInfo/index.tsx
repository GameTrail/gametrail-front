import type { FC } from 'react';
import React from 'react';
import { DateBlock, DateContainer, DateDiv } from './styles';

export type Props = {
  dateStart: string;
  dateEnd: string;
};

const DateInfo: FC<Props> = ({ dateStart, dateEnd }) => (
  <DateBlock>
    <DateContainer>
      <p>Inicio</p>
      <DateDiv>
        <p>
          {dateStart}
        </p>
      </DateDiv>
    </DateContainer>
    <DateContainer>
      <p>Fin</p>
      <DateDiv>
        <p>
          {dateEnd}
        </p>
      </DateDiv>
    </DateContainer>
  </DateBlock>
);

export default DateInfo;
