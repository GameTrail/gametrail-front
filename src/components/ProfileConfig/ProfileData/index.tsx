import type { FC } from 'react';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import type { UserCookie } from '@/components/Login/LoginComponent/types';
import useLanguage from '@/i18n/hooks';
import { minimizeUserCookie, normalizeUserCookie } from '@/models/User/types';
import { getUserCookie, setMinCookie } from '@/utils/login';
import {
  MainContainer, ProfileForm, FieldContainer, Label, Input, Button, ProfileFormTitle, ErrorContainer,
} from './styles';

type Props = {
  userData: UserCookie | null;
};

const ProfileData:FC<Props> = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const user = getUserCookie();
  const token = user?.token === undefined ? '' : user?.token;
  const [registerErrors, setRegisterErrors] = useState<string[]>([]);

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const requestData = {
      userId: user?.id,
      email: formData.get('email') === '' ? user?.email : formData.get('email'),
      avatar: formData.get('avatar') === '' ? user?.avatar : formData.get('avatar'),
    };
    try {
      const res = await fetch('https://gametrail-backend-s4-production.up.railway.app/api/edit-user/', {
        method: 'PUT',
        body: JSON.stringify(requestData),
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        const updatedUser = {
          ...user,
          email: requestData.email,
          avatar: requestData.avatar,
        };
        const userCookie = normalizeUserCookie(updatedUser, token);
        const MinUser = minimizeUserCookie(userCookie, userCookie.auth_token);
        setMinCookie('user', MinUser, 7);
        router.push(`/user/${user?.id}`);
      } else {
        const errorData = await res.json() as { [key: string]: string[] };
        const errorMessages = Object.entries(errorData)
          .flatMap(([key, errors]) => errors.map((error) => `${key}: ${error}`));
        setRegisterErrors(errorMessages);
      }
    } catch (error) {
      setRegisterErrors(['Ha ocurrido un error']);
    }
  }, [router, token, user]);

  return (
    <MainContainer>
      <ProfileForm onSubmit={handleSubmit}>
        <ProfileFormTitle>
          {' '}
          {t('edit_data')}
          {' '}
        </ProfileFormTitle>
        {registerErrors.map((message) => (
          <ErrorContainer key={registerErrors.indexOf(message)}>{message}</ErrorContainer>
        ))}
        <FieldContainer>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder={`${user?.email}`} />
        </FieldContainer>

        <FieldContainer>
          <Label htmlFor="avatar">Avatar</Label>
          <Input type="url" name="avatar" id="avatar" placeholder={`${user?.avatar}`} />
        </FieldContainer>

        <Button type="submit">{t('update_data')}</Button>

      </ProfileForm>
    </MainContainer>

  );
};

export default ProfileData;
