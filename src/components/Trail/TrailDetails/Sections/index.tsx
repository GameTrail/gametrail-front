import type { FC } from 'react';
import { useMemo, useState } from 'react';
import PlayersList from '@/components/Trail/TrailDetails/Sections/PlayersList';
import { ButtonType } from '@/containers/GameDetails/types';
import { MOCK_TRAIL_GAMES } from '@/models/Game/mock';
import type { Trail } from '@/models/Trail/types';
import type { User } from '@/models/User/types';
import TrailButtons from '../TrailButtons';
import TrailGameList from '../TrailGameList';
import { SectionContainer } from './styles';

export type Props = {
  trailData: Trail;
  usersData: User[];
};

const Sections: FC<Props> = ({ trailData, usersData }) => {
  const [selectedButton, setSelectedButton] = useState<ButtonType>(ButtonType.Games);
  const onClickButton = (button: ButtonType) => {
    setSelectedButton(button);
  };

  const handleRenderList = useMemo(() => {
    // if (selectedButton === ButtonType.Chat) return <ChatContainer trailData={trailData} />;
    if (selectedButton === ButtonType.Players) return <PlayersList usersData={usersData} />;
    if (selectedButton === ButtonType.Games) return <TrailGameList games={MOCK_TRAIL_GAMES} />; // TODO: Connect to API
    return null;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedButton, trailData, usersData]);

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
