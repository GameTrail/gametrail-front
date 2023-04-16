import type { FC } from 'react';
import { useState } from 'react';
import useLanguage from '@/i18n/hooks';
import { Button, DivContainer, InputField } from './styles';

export type Props = {
  onClickNewComment: (input: string) => void;
};

const ImputFieldSection : FC<Props> = ({ onClickNewComment }) => {
  const [input, setInput] = useState<string>();
  const { t } = useLanguage();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const sendCommentToParent = () => {
    onClickNewComment(input ?? '');
    setInput('');
  };

  const writeAComment = t('write_a_comment');

  return (
    <DivContainer>
      <InputField type="text" placeholder={writeAComment} value={input} onChange={handleOnChange} />
      <Button type="submit" onClick={sendCommentToParent}>{t('send')}</Button>
    </DivContainer>
  );
};
export default ImputFieldSection;
