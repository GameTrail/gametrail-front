import type { FC } from 'react';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIconProps, FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { Container } from './styles';

export type Props = {
  userName: string;
  userAvatar: string;
};
const UserData: FC<Props> = ({ userName, userAvatar }) => (
  <Container>
    <Image src={userAvatar} alt={userName} width={150} height={150} />
    <h1>
      @
      {userName}
      {' '}
      <FontAwesomeIcon icon={faCircleCheck} color="#31A4F1" size="xs" />
    </h1>
  </Container>
);

export default UserData;
