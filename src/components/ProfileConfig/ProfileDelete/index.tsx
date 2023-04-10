import React, { useState } from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { getUserCookie } from '@/utils/login';
import {
  DeleteButton, DeletePopup, DeleteHeader, DeleteConfirmButton, DeleteCancelButton, DeleteContainer,
} from './styles';

const ProfileDelete = () => {
  const [deletePopup, setDeletePopup] = useState(false);
  const router = useRouter();
  const user = getUserCookie();
  const token = user?.token;
  const handleDeleteSecondChance = () => {
    setDeletePopup(true);
  };

  const handleDelete = async () => {
    const requestData = {
      userId: user?.id,
    };
    try {
      const res = await fetch('https://gametrail-backend-production-8fc0.up.railway.app/api/user/', {
        method: 'DELETE',
        body: JSON.stringify(requestData),
        headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }
    } catch (error) {
      throw new Error();
    } finally {
      Cookies.remove('user');
      router.push('/');
    }
  };

  const handleDeletePopupRender = deletePopup ? (
    <DeletePopup>
      <DeleteHeader>
        <FontAwesomeIcon icon={faExclamationTriangle} size="2xl" />
        ¿Estás seguro de que quieres borrar tu cuenta?
      </DeleteHeader>
      <DeleteConfirmButton onClick={handleDelete}>
        Sí, borrar cuenta
      </DeleteConfirmButton>
      <DeleteCancelButton onClick={() => setDeletePopup(false)}>
        No, quiero cancelar
      </DeleteCancelButton>

    </DeletePopup>

  ) : null;

  return (
    <>
      <DeleteContainer>
        <DeleteButton onClick={handleDeleteSecondChance}>
          Eliminar cuenta
        </DeleteButton>
      </DeleteContainer>

      {handleDeletePopupRender}

    </>

  );
};

export default ProfileDelete;
