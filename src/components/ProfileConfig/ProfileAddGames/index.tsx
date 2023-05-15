import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useLanguage from '@/i18n/hooks';
import { getUserCookie } from '@/utils/login';
import {
  AddButton, AddContainer, Container, ImageInput, ImagePreview, ImageSelector, Information, StyledToastContainer,
} from './styles';
import 'react-toastify/dist/ReactToastify.css';

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

  const handleToastLaunch = (message: string) => {
    toast.error(message);
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
        const data = await res.json();
        if (res.status === 400) {
          handleToastLaunch('La imagen proporcionada no contenía juegos.');
        } else if (res.status === 201) {
          handleToastLaunch('Todos los juegos se han añadido correctamente.');
        } else if (res.status === 200) {
          handleToastLaunch('Se han añadido algunos juegos.');
        } else {
          handleToastLaunch(data);
        }
      } catch (error) {
        throw new Error();
      }
    }
  };

  return (
    <Container>
      <StyledToastContainer position="top-center" hideProgressBar />
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
