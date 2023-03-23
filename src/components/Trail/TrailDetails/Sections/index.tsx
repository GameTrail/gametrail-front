import type { FC } from 'react';
import React from 'react';
import Chat from '@/components/Trail/TrailDetails/Sections/Chat';
import PlayersList from '@/components/Trail/TrailDetails/Sections/PlayersList';
import { Button, Container, SectionContainer } from '@/components/Trail/TrailDetails/Sections/styles';
import type { Trail } from '@/models/Trail/types';

export type Props = {
  trailData: Trail;
};

enum SectionsButtons {
  players = 3,
  chat = 2,
  games = 1,
}

const Sections:FC<Props> = ({ trailData }) => {
  const [selectedSection, setSelectedSection] = React.useState(3);

  let section = <PlayersList trailData={trailData} />;
  if (selectedSection === SectionsButtons.chat) {
    section = <Chat />;
  }

  return (
    <>
      <Container>
        <Button>
          Listado de Juegos
        </Button>
        <Button data-current={selectedSection === SectionsButtons.chat.valueOf()} onClick={() => setSelectedSection(SectionsButtons.chat)}>
          Chat
        </Button>
        <Button data-current={selectedSection === SectionsButtons.players.valueOf()} onClick={() => setSelectedSection(SectionsButtons.players)}>
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
