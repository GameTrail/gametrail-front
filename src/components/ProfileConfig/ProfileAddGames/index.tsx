import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import useLanguage from '@/i18n/hooks';
import { getUserCookie } from '@/utils/login';
import {
  AddButton, AddContainer, Container, ImageInput, ImagePreview, ImageSelector, Information,
} from './styles';

const ProfileAddGames = () => {
  const user = getUserCookie();
  const token = user?.token;
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleAddGames = async () => {
    if (user && token && selectedImage) {
      const formData = new FormData();
      formData.append('user', user.id.toString());
      formData.append('image', selectedImage);

      try {
        const res = await fetch('https://gametrail-backend-s4-production.up.railway.app/api/iaGameList', {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
      } catch (error) {
        throw new Error();
      }
    }
  };

  return (
    <Container>
      <Information>
        <p>{t('add_information')}</p>
        <ImageInput>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <ImageSelector>
            {t('add_here')}
            .
          </ImageSelector>
        </ImageInput>
      </Information>

      {selectedImage && (
        <AddContainer>
          <ImagePreview src={URL.createObjectURL(selectedImage)} alt="Selected" />
          <AddButton type="button" onClick={handleAddGames}>
            {t('add_games')}
          </AddButton>
        </AddContainer>
      )}
    </Container>
  );
};

export default ProfileAddGames;
