import type { FC } from 'react';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import type { User } from '@/models/User/types';
import { Container } from './styles';

export type Props = {
  user:User;
};
const UserData: FC<Props> = ({ user }) => (
  <Container>
    <Image src={user.avatar} alt={user.username} width={150} height={150} />
    <h1>
      @
      {user.username}
      {' '}
      {user.plan === 'PREMIUM' && (
        <FontAwesomeIcon icon={faCrown} size="xs" />
      )}

    </h1>
  </Container>

);

export default UserData;
