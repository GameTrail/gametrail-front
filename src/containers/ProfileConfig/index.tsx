import React from 'react';
import useLanguage from '@/i18n/hooks';
import { ProfileData, ProfileDelete, ProfileExternalConnect } from '@/components/ProfileConfig';
import { getUserCookie } from '@/utils/login';
import {
  MainContainer, Header, Separator, MainHeader,
} from './styles';

const ProfileUser = () => {
  const { t } = useLanguage();
  const user = getUserCookie();

  return (
    <MainContainer>
      <MainHeader>{t('account_config')}</MainHeader>
      <Header>{t('data')}</Header>
      <Separator />
      <ProfileData userData={user} />
      <Header>{t('actions')}</Header>
      <Separator />
      <ProfileDelete />
    </MainContainer>
  );
};

export default ProfileUser;
