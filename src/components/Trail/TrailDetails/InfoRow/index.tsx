import type { FC } from 'react';
import React, { useState } from 'react';
import DateInfo from '@/components/Trail/TrailDetails/InfoRow/DateInfo';
import useLanguage from '@/i18n/hooks';
import type { Trail as TrailData } from '@/models/Trail/types';
import { getUserCookie } from '@/utils/login';
import {
  InfoRow, JoinButton, JoinContainer, JoinPlayersCount,
} from './styles';

export type Props = {
  trailData: TrailData;
};

const PlusInfoRow: FC<Props> = ({ trailData }) => {
  const { t } = useLanguage();
  const user = getUserCookie();
  const token = user?.token || '';

  const [isJoined, setIsJoined] = useState(false);

  if (user) {
    for (let i = 0; i < trailData.users.length; i += 1) {
      if (isJoined) {
        break;
      }
      if (trailData.users[i].id === user.id) {
        setIsJoined(true);
        break;
      }
    }
  }

  const handleJoin = () => {
    const requestData = {
      trail: trailData.id,
      user: user?.id.toString(),
    };
    try {
      fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/addUserInTrail', {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      }).then((r) => r);
    } catch (error) {
      throw new Error();
    } finally {
      setIsJoined(true);
    }
  };

  const joinButton = () => {
    if (user && trailData.users.length < trailData.maxPlayers) {
      if (isJoined) {
        return (
          <JoinButton>
            <p>{t('joined')}</p>
          </JoinButton>
        );
      }
      return (
        <JoinButton onClick={handleJoin}>
          <p>{t('join')}</p>
        </JoinButton>
      );
    }
    return (
      <JoinButton style={{ visibility: 'hidden' }}>
        <p>{t('joined')}</p>
      </JoinButton>
    );
  };

  return (
    <InfoRow>
      <DateInfo dateStart={trailData.startDate} dateEnd={trailData.finishDate} />
      <JoinContainer>
        {joinButton()}

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
};

export default PlusInfoRow;
