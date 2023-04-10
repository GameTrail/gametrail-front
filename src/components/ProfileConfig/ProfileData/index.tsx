import type { FC } from 'react';
import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import type { UserCookie } from '@/components/Login/LoginComponent/types';
import { minimizeUserCookie, normalizeUserCookie } from '@/models/User/types';
import { getUserCookie, setMinCookie } from '@/utils/login';
import {
  MainContainer, ProfileForm, FieldContainer, Label, Input, Button, ProfileFormTitle,
} from './styles';

type Props = {
  userData: UserCookie | null;
};

const ProfileData:FC<Props> = () => {
  const router = useRouter();
  const user = getUserCookie();
  const token = user?.token === undefined ? '' : user?.token;

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
      const res = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/user/', {
        method: 'PUT',
        body: JSON.stringify(requestData),
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }
    } catch (error) {
      throw new Error();
    } finally {
      const updatedUser = {
        ...user,
        email: requestData.email,
        avatar: requestData.avatar,
      };
      const userCookie = normalizeUserCookie(updatedUser, token);
      const MinUser = minimizeUserCookie(userCookie, userCookie.auth_token);
      setMinCookie('user', MinUser, 7);
      router.push(`/user/${user?.id}`);
    }
  }, [router, token, user]);

  return (
    <MainContainer>
      <ProfileForm onSubmit={handleSubmit}>
        <ProfileFormTitle> Editar datos </ProfileFormTitle>
        <FieldContainer>
          <Label htmlFor="name">Email</Label>
          <Input type="email" name="email" id="email" placeholder={`${user?.email}`} />
        </FieldContainer>

        <FieldContainer>
          <Label htmlFor="avatar">Avatar</Label>
          <Input type="url" name="avatar" id="avatar" placeholder={`${user?.avatar}`} />
        </FieldContainer>

        <Button type="submit">Actualizar datos</Button>

      </ProfileForm>
    </MainContainer>

  );
};

export default ProfileData;
