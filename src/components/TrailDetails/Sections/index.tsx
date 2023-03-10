import type { FC } from 'react';
import React from 'react';
import Chat from '@/components/TrailDetails/Sections/Chat';
import PlayersList from '@/components/TrailDetails/Sections/PlayersList';
import { Button, Container, SectionContainer } from '@/components/TrailDetails/Sections/styles';
import type { Trail as TrailData } from '@/models/Trail/types';

export type Props = {
  trailData: TrailData;
};

const Sections:FC<Props> = ({ trailData }) => {
  const [selectedSection, setSelectedSection] = React.useState(3);

  let section = <PlayersList trailData={trailData} />;
  if (selectedSection === 2) {
    section = <Chat />;
  } else if (selectedSection === 3) {
    section = <PlayersList trailData={trailData} />;
  }

  return (
    <>
      <Container>
        <Button>
          Listado de Juegos
        </Button>
        <Button data-current={selectedSection === 2} onClick={() => setSelectedSection(2)}>
          Chat
        </Button>
        <Button data-current={selectedSection === 3} onClick={() => setSelectedSection(3)}>
          Jugadores
        </Button>

      </Container>
      <SectionContainer>
        {section}
      </SectionContainer>
    </>
  );
};

export default Sections;
