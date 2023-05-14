import type { FC } from 'react';
import React, { useCallback, useState, useEffect } from 'react';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { UserCookie } from '@/components/Login/LoginComponent/types';
import RegisterAvatar from '@/components/Register/RegisterAvatar';
import { minimizeUserCookie, normalizeUserCookie } from '@/models/User/types';
import { getUserCookie, setMinCookie } from '@/utils/login';
import {
  MainContainer, ProfileForm, FieldContainer, Label, Input, Button, ProfileFormTitle, ErrorContainer, PremiumDiv, AvatarPreview,
} from './styles';

type Props = {
  userData: UserCookie | null;
};
const CLOUD_URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL as string;

const ProfileData:FC<Props> = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const user = getUserCookie();
  const token = user?.token === undefined ? '' : user?.token;
  const [registerErrors, setRegisterErrors] = useState<string[]>([]);
  const [avatarURL, setAvatar] = useState<string | undefined>(user?.avatar);
  const [avatarPremium, setAvatarPremium] = useState<string | undefined>('');
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setAvatar(formData.get('avatar') as string);
    setAvatarPremium(formData.get('avatarPremium') as any);

    const requestData = {
      userId: user?.id,
      email: formData.get('email') === '' ? user?.email : formData.get('email'),
      avatar: avatarURL,
    };

    if (avatarPremium) {
      try {
        const formDataPremium = new FormData();
        formDataPremium.append('file', avatarPremium);
        formDataPremium.append('upload_preset', 'gametrail');
        const result = await fetch(`${CLOUD_URL}`, {
          method: 'POST',
          body: formDataPremium,
        });

        const response = await result.json();
        if (result.ok) {
          requestData.avatar = response.secure_url;
        }
      } catch (error) {
        toast.error(t('toast_alert_avatar'));
      }
    }

    try {
      const res = await fetch('https://gametrail-backend-s4-production.up.railway.app/api/edit-user', {
        method: 'PUT',
        body: JSON.stringify(requestData),
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
      });

      if (avatarURL === '' && user?.avatar) {
        requestData.avatar = user.avatar;
      }

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
  }, [avatarPremium, avatarURL, router, t, token, user]);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      setAvatarPremium(file);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleImagePreviewRender = () => {
    if (imagePreview !== null) {
      return (<AvatarPreview src={imagePreview as string} alt="Selected image" />);
    }
    return (<AvatarPreview src={user?.avatar} alt="Default image" />);
  };
  return (
    <MainContainer>
      <ToastContainer position="top-center" theme="colored" hideProgressBar />
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
          <RegisterAvatar
            setAvatar={setAvatar}
            selectedAvatar={avatarURL}
          />
        </FieldContainer>

        {shouldRender && user?.plan === 'Premium' && (
        <FieldContainer>
          <PremiumDiv>
            <Label htmlFor="avatarPremium">
              {t('custom_avatar')}
            </Label>
            <FontAwesomeIcon icon={faCrown} data-testid="premium-icon" className="crown" size="xs" />
          </PremiumDiv>
          {handleImagePreviewRender()}
          <Input type="file" name="avatarPremium" id="avatarPremium" accept="image/*" onChange={handleImageChange} />
        </FieldContainer>
        )}

        <Button type="submit">{t('update_data')}</Button>

      </ProfileForm>
    </MainContainer>

  );
};

export default ProfileData;
