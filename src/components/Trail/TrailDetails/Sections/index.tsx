import type { FC } from 'react';
import { useMemo, useState } from 'react';
import PlayersList from '@/components/Trail/TrailDetails/Sections/PlayersList';
import { ButtonType } from '@/containers/GameDetails/types';
import type { Trail } from '@/models/Trail/types';
import TrailButtons from '../TrailButtons';
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
    // if (selectedButton === ButtonType.Chat) return <ChatContainer trailData={trailData} />;
    if (selectedButton === ButtonType.Players) return <PlayersList trailData={trailData} />;
    // if (selectedButton === ButtonType.Games) return <TrailGameList games={MOCK_TRAIL_GAMES} />; // TODO: Connect to API
    return null;
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
