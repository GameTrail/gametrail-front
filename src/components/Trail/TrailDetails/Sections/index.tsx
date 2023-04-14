import type { FC } from 'react';
import { useMemo, useState } from 'react';
import ChatComponent from '@/components/Chat/ChatComponent';
import PlayersList from '@/components/Trail/TrailDetails/Sections/PlayersList';
import { ButtonType } from '@/containers/GameDetails/types';
import type { Trail } from '@/models/Trail/types';
import TrailButtons from '../TrailButtons';
import TrailGameList from '../TrailGameList';
import { SectionContainer } from './styles';

export type Props = {
  trailData: Trail;
};

const Sections: FC<Props> = ({ trailData }) => {
  const [selectedButton, setSelectedButton] = useState<ButtonType>(ButtonType.Games);
  const onClickButton = (button: ButtonType) => {
    setSelectedButton(button);
  };

  const handleRenderList = useMemo(() => {
    if (selectedButton === ButtonType.Chat) return <ChatComponent trailData={trailData} />;
    if (selectedButton === ButtonType.Players) return <PlayersList trailData={trailData} />;
    return <TrailGameList trailData={trailData} />;
  }, [selectedButton, trailData]);

  return (
    <>
      <TrailButtons onClickButton={onClickButton} selectedButton={selectedButton} />
      <SectionContainer>
        {handleRenderList}
      </SectionContainer>
    </>
  );
};

export default Sections;
