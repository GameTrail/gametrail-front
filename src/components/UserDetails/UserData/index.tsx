import type { FC } from 'react';
import Image from 'next/image';
import { Container } from './styles';

export type Props = {
  userName: string;
  userAvatar: string;
};
const UserData: FC<Props> = ({ userName, userAvatar }) => (
  <Container>
    <Image  src={userAvatar} alt={userName} width={150} height={150} />
    <h1>@{userName}</h1>
  </Container>
);

export default UserData;
