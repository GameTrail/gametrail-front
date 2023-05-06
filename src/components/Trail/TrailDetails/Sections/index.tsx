import type { FC } from 'react';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import { socketInit, ChatComponent } from '@/components/Chat/ChatComponent';
import PlayersList from '@/components/Trail/TrailDetails/Sections/PlayersList';
import { ButtonType } from '@/containers/GameDetails/types';
import useLanguage from '@/i18n/hooks';
import type { Trail } from '@/models/Trail/types';
import { getUserCookie } from '@/utils/login';
import TrailButtons from '../TrailButtons';
import TrailGameList from '../TrailGameList';
import { SectionContainer } from './styles';
import 'react-toastify/dist/ReactToastify.css';

export type Props = {
  trailData: Trail;
};

const Sections: FC<Props> = ({ trailData }) => {
  const userCookie = getUserCookie();
  const { t } = useLanguage();
  const [selectedButton, setSelectedButton] = useState<ButtonType>(ButtonType.Games);
  const onClickButton = (button: ButtonType) => {
    setSelectedButton(button);
  };

  const isUserInTrail = trailData.users.find((user) => user.id === userCookie?.id);
  const checkChatButton = () => {
    let result = false;
    if (userCookie === null || isUserInTrail === undefined) {
      result = true;
    }

    return result;
  };

  const handleToastLaunch = () => {
    toast.warning(t('toast_alert_chat'));
  };

  const handleRenderList = useMemo(() => {
    if (selectedButton === ButtonType.Chat) {
      const isUserNotLoggedOrNotInTrail = checkChatButton();
      if (isUserNotLoggedOrNotInTrail) {
        handleToastLaunch();
      } else {
        socketInit();
        return <ChatComponent trailData={trailData} />;
      }
    }
    if (selectedButton === ButtonType.Players) return <PlayersList trailData={trailData} />;
    return <TrailGameList trailData={trailData} />;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedButton, trailData]);

  return (
    <motion.div
      layout
      transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
    >
      <ToastContainer position="top-center" theme="colored" hideProgressBar />
      <TrailButtons onClickButton={onClickButton} selectedButton={selectedButton} />
      <SectionContainer>
        {handleRenderList}
      </SectionContainer>
    </motion.div>
  );
};

export default Sections;
