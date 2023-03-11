import type { ButtonType } from '@/containers/UserDetails/types';

export type Props = {
  onClickButton: (button: ButtonType) => void
  selectedButton: ButtonType
};
