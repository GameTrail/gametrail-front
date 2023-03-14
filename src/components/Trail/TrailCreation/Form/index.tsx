import React from 'react';
import {
  Button,
  ButtonRow,
  DateFieldContainer,
  FieldContainer, Form,
  Input,
  InputDate,
  InputTextArea,
  Label,
} from '@/components/Trail/TrailCreation/Form/styles';

const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // API POST of the trail, should ignore the games field
  // const response = await fetch('http://dakopdkapdkaopkd.com', { body: formData, method: 'POST' });
  // const trailData = await response.json();
  // const trailId = trailData.id;
  const trailId = 1; // DELETE THIS LINE WHEN THE API IS IMPLEMENTED AND UNCOMMENT THE PREVIOUS LINES
  const gameIds = data.games.toString().split(',');
  for (let i = 0; i < gameIds.length; i += 1) {
    const formData2 = new FormData();
    // API gets each game id, the id of the trail, the priority and the state
    formData2.append('gameId', gameIds[i].trim());
    formData2.append('trailId', trailId.toString());
    // formData2.append('userId', userId); PENDING UNTIL AUTHENTICATION IS IMPLEMENTED
    formData2.append('priority', i.toString());
    formData2.append('state', 'PENDING');

    // Workaround to send the data to the API, since await should not be used in a loop
    // eslint-disable-next-line no-await-in-loop
    // await fetch('http://dakopdkapdkaopkd.com', { body: formData2, method: 'POST' });
  }

  // Redirect to the trail page
  window.location.href = `/trail/${trailId}`;
};

const TrailCreationForm = () => (
  <Form onSubmit={(event) => HandleSubmit(event)}>
    <FieldContainer>
      <Label htmlFor="name">Nombre del Trail</Label>
      <Input type="text" name="name" id="name" />
    </FieldContainer>

    <FieldContainer>
      <Label htmlFor="description">Descripción</Label>
      <InputTextArea name="description" id="description" />
    </FieldContainer>

    <DateFieldContainer>
      <FieldContainer>
        <Label htmlFor="start-date">Fecha de Inicio</Label>
        <InputDate type="date" name="start-date" id="start-date" />
      </FieldContainer>

      <FieldContainer>
        <Label htmlFor="end-date">Fecha de Fin</Label>
        <InputDate type="date" name="end-date" id="end-date" />
      </FieldContainer>
    </DateFieldContainer>

    <FieldContainer>
      <Label htmlFor="max-players">Número Máximo de Jugadores</Label>
      <Input type="number" name="max-players" id="max-players" />
    </FieldContainer>

    <FieldContainer>
      <Label htmlFor="games">Juegos que se van a Jugar (IDs)</Label>
      <Input type="text" name="games" id="games" />
    </FieldContainer>

    <ButtonRow>
      <Button type="submit">Create</Button>
    </ButtonRow>

  </Form>
);

export default TrailCreationForm;
