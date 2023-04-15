import type { FC } from 'react';
import React from 'react';
import useLanguage from '@/i18n/hooks';
import { DateBlock, DateContainer, DateDiv } from './styles';

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
          <p>
            {dateStart}
          </p>
        </DateDiv>
      </DateContainer>
      <DateContainer>
        <p>{t('date_end')}</p>
        <DateDiv>
          <p>
            {dateEnd}
          </p>
        </DateDiv>
      </DateContainer>
    </DateBlock>
  );
};

export default DateInfo;
