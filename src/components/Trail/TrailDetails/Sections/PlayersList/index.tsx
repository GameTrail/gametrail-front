import type { FC } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  PlayerListContainer,
  PlayerListElement, PlayerListHeader, PlayerName, PlayerValue, ProfilePicture,
} from '@/components/Trail/TrailDetails/Sections/PlayersList/styles';
import useLanguage from '@/i18n/hooks';
import type { Trail } from '@/models/Trail/types';
import PlayerRating from './PlayerRatingCard';

export type Props = {
  trailData: Trail;
};

const PlayersList: FC<Props> = ({ trailData }) => {
  const { t } = useLanguage();
  return (
    <Container>
      <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ type: 'spring' }}>
        <PlayerListHeader>
          <h2>{t('players')}</h2>
          <h2>{t('rating')}</h2>
        </PlayerListHeader>

        <PlayerListContainer key="users-list">
          {trailData.users.map((trailMember) => (

            <PlayerListElement key={trailMember.id} href={`/user/${trailMember?.id}`}>
              <ProfilePicture
                src={trailMember.avatar}
                alt={trailMember.username}
              />
              <PlayerName>
                @
                {trailMember.username}
              </PlayerName>
              <PlayerValue>
                <PlayerRating trailMember={trailMember} />
              </PlayerValue>

            </PlayerListElement>

          ))}
        </PlayerListContainer>

      </motion.div>
    </Container>

  );
};

export default PlayersList;
