import React from 'react';
import { ProfileData, ProfileDelete } from '@/components/ProfileConfig';
import { getUserCookie } from '@/utils/login';
import {
  MainContainer, Header, Separator, MainHeader,
} from './styles';

const ProfileUser = () => {
  const user = getUserCookie();

  return (
    <MainContainer>
      <MainHeader>Configuración de cuenta</MainHeader>
      <Header>Datos</Header>
      <Separator />
      <ProfileData userData={user} />
      <Header>Acciones</Header>
      <Separator />
      <ProfileDelete />
    </MainContainer>
  );
};

export default ProfileUser;
