import type { FC } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import useLanguage from '@/i18n/hooks';
import { getUserCookie } from '@/utils/login';
import { Button, DivContainer, InputField } from './styles';
import 'react-toastify/dist/ReactToastify.css';

export type Props = {
  onClickNewComment: (input: string) => void;
};

const ImputFieldSection : FC<Props> = ({ onClickNewComment }) => {
  const user = getUserCookie();
  const [input, setInput] = useState<string>();
  const { t } = useLanguage();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleToastLaunch = () => {
    toast.warning(t('toast_alert_comments'));
  };

  const sendCommentToParent = () => {
    if (user === null) {
      handleToastLaunch();
    } else {
      onClickNewComment(input ?? '');
      setInput('');
    }
  };

  const writeAComment = t('write_a_comment');

  return (
    <DivContainer>
      <ToastContainer position="top-center" theme="colored" hideProgressBar />
      <InputField type="text" placeholder={writeAComment} value={input} onChange={handleOnChange} />
      <Button type="submit" onClick={sendCommentToParent}>{t('send')}</Button>
    </DivContainer>
  );
};
export default ImputFieldSection;
