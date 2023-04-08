import type { FC } from 'react';
import { useState } from 'react';
import { Button, DivContainer, InputField } from './styles';

export type Props = {
  onClickNewComment: (input: string) => void;
};

const ImputFieldSection : FC<Props> = ({ onClickNewComment }) => {
  const [input, setInput] = useState<string>();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const sendCommentToParent = () => {
    onClickNewComment(input ?? '');
    setInput('');
  };

  return (
    <DivContainer>
      <InputField type="text" placeholder="Escribe un comentario" value={input} onChange={handleOnChange} />
      <Button type="submit" onClick={sendCommentToParent}>Enviar</Button>
    </DivContainer>
  );
};
export default ImputFieldSection;
