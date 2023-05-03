import type { FC } from 'react';
import React from 'react';
import useLanguage from '@/i18n/hooks';
import {
  DateBlock, DateContainer, DateDiv, DateText,
} from './styles';

export type Props = {
  dateStart: string;
  dateEnd: string;
};

const DateInfo: FC<Props> = ({ dateStart, dateEnd }) => {
  const { t } = useLanguage();
  return (
    <DateBlock>
      <DateContainer>
        <p>{t('date_start')}</p>
        <DateDiv>
          <DateText>
            {dateStart}
          </DateText>
        </DateDiv>
      </DateContainer>
      <DateContainer>
        <p>{t('date_end')}</p>
        <DateDiv>
          <DateText>
            {dateEnd}
          </DateText>
        </DateDiv>
      </DateContainer>
    </DateBlock>
  );
};

export default DateInfo;
