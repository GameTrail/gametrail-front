import type { ButtonType } from '@/containers/UserDetails/types';

export type Props = {
  onUpdateButton: (button: ButtonType) => void
  selectedButton: ButtonType
};
