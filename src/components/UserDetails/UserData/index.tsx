import type { FC } from 'react';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <FontAwesomeIcon icon={faCrown} size="xs" />
    </h1>
  </Container>

);

export default UserData;
