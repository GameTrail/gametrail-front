import type { FC } from 'react';
import React, { useState } from 'react';
import DateInfo from '@/components/Trail/TrailDetails/InfoRow/DateInfo';
import { useGameTrail } from '@/hooks';
import type { Trail as TrailData } from '@/models/Trail/types';
import {
  InfoRow, JoinButton, JoinContainer, JoinPlayersCount,
} from './styles';

export type Props = {
  trailData: TrailData;
};

const PlusInfoRow: FC<Props> = ({ trailData }) => {
  const { user, token } = useGameTrail();
  const [isJoined, setIsJoined] = useState(false);

  if (user) {
    trailData.users.forEach((userTrail) => {
      if (userTrail.id === user.id) {
        setIsJoined(true);
      }
    });
  }

  const handleJoin = () => {
    const requestData = {
      trailId: trailData.id,
      userId: user?.id.toString(),
    };
    try {
      fetch('https://gametrail-backend-production.up.railway.app/api/trail/join', {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      }).then((r) => r);
    } catch (error) {
      throw new Error();
    }
  };

  let joinButton: JSX.Element;
  if (user && trailData.users.length < trailData.maxPlayers) {
    if (isJoined) {
      joinButton = (
        <JoinButton>
          <p>UNIDO</p>
        </JoinButton>
      );
    } else {
      joinButton = (
        <JoinButton onClick={handleJoin}>
          <p>UNIRSE</p>
        </JoinButton>
      );
    }
  } else {
    joinButton = (
      <JoinButton style={{ visibility: 'hidden' }}>
        <p>UNIRSE</p>
      </JoinButton>
    );
  }

  return (
    <InfoRow>
      <DateInfo dateStart={trailData.startDate} dateEnd={trailData.finishDate} />
      <JoinContainer>
        {joinButton}

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
