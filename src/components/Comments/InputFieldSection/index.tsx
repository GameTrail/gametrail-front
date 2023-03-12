import type { FC } from 'react';
import { Button, DivContainer, InputField } from './styles';

export type Props = {
  input: string;
  onClickNewComment: () => void;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ImputFieldSection : FC<Props> = ({ input, onClickNewComment, handleInput }) => (
  <DivContainer>
    <InputField type="text" placeholder="Escribe un comentario" value={input} onChange={handleInput} />
    <Button type="submit" onClick={onClickNewComment}>Enviar</Button>
  </DivContainer>
);
export default ImputFieldSection;
