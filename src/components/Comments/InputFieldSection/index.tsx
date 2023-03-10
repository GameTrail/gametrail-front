import type { FC } from 'react';
import { Button, DivContainer, InputField } from './styles';

export type Props = {
  input: string;
  handleNewComment: () => void;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ImputFieldSection : FC<Props> = ({ input, handleNewComment, handleInput }) => (
  <DivContainer>
    <InputField type="text" placeholder="Escribe un comentario" value={input} onChange={handleInput} />
    <Button type="submit" onClick={handleNewComment}>Enviar</Button>
  </DivContainer>
);
export default ImputFieldSection;
