import React from 'react';
import { ProfileData, ProfileDelete, ProfileExternalConnect } from '@/components/ProfileConfig';
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

      <Header>Conexiones</Header>
      <Separator />
      <ProfileExternalConnect />

    </MainContainer>
  );
};

export default ProfileUser;
