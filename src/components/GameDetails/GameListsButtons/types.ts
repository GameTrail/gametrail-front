import type { ButtonType } from '@/containers/GameDetails/types';

export type Props = {
  onClickButton: (button: ButtonType) => void
  selectedButton: ButtonType
};
