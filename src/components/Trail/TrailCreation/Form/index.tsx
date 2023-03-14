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

const TrailCreationForm = () => (
  <Form>
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

    <ButtonRow>
      <Button type="submit">Create</Button>
    </ButtonRow>

  </Form>
);

export default TrailCreationForm;
