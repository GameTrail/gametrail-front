import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import DateInfo from '@/components/Trail/TrailDetails/InfoRow/DateInfo';
import useLanguage from '@/i18n/hooks';
import type { Trail as TrailData } from '@/models/Trail/types';
import { checkUserInTrail } from '@/utils/checkUserInTrail';
import { getUserCookie } from '@/utils/login';
import {
  InfoRow, JoinButton, JoinContainer, JoinPlayersCount,
} from './styles';
import 'react-toastify/dist/ReactToastify.css';

export type Props = {
  trailData: TrailData;
};

const PlusInfoRow: FC<Props> = ({ trailData }) => {
  const { t } = useLanguage();
  const user = getUserCookie();
  const token = user?.token || '';
  const [userInTrail, setUserInTrail] = useState(false);

  const handleToastLaunch = (message: string) => {
    toast.error(message);
  };

  const handleJoin = async () => {
    const requestData = {
      trail: trailData.id,
      user: user?.id.toString(),
    };
    try {
      const res = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/addUserInTrail', {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) {
        handleToastLaunch(data);
      } else {
        const newUserInTrail = {
          id: user?.id,
          username: user?.username,
          email: user?.email,
          avatar: user?.avatar,
          plan: user?.plan,
        };
        trailData.users.push(newUserInTrail);
        setUserInTrail(true);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const handleRenderJoinButton = () => {
    if (user && trailData.users.length < trailData.maxPlayers) {
      if (userInTrail) {
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

  useEffect(() => {
    setUserInTrail(checkUserInTrail(user, trailData));
  }, [user, trailData, userInTrail]);

  return (
    <InfoRow>
      <DateInfo dateStart={trailData.startDate} dateEnd={trailData.finishDate} />
      <JoinContainer>
        <ToastContainer position="top-center" theme="colored" hideProgressBar />
        {handleRenderJoinButton()}
        <JoinPlayersCount>
          <p>
            ‍🙍
          </p>
          <p>
            {trailData.users?.length}
            /
            {trailData.maxPlayers}
          </p>
        </JoinPlayersCount>

      </JoinContainer>

    </InfoRow>
  );
};

export default PlusInfoRow;
