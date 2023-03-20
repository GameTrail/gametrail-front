import type { FC } from 'react';
import React from 'react';
import PlayersList from '@/components/Trail/TrailDetails/Sections/PlayersList';
import { Button, Container, SectionContainer } from '@/components/Trail/TrailDetails/Sections/styles';
import ChatContainer from '@/containers/ChatContainer';
import type { Trail } from '@/models/Trail/types';
import type { User as UserDetails } from '@/models/User/types';

export type Props = {
  trailData: Trail;
  usersData: UserDetails [];
};

const Sections:FC<Props> = ({ trailData, usersData }) => {
  const [selectedSection, setSelectedSection] = React.useState(3);

  let section = <PlayersList usersData={usersData} />;
  if (selectedSection === 2) {
    section = <ChatContainer trailData={trailData} />;
  } else if (selectedSection === 3) {
    section = <PlayersList usersData={usersData} />;
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
