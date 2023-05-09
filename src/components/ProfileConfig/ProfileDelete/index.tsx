import React, { useState } from 'react';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import useLanguage from '@/i18n/hooks';
import { getUserCookie } from '@/utils/login';
import {
  DeleteButton, DeletePopup, DeleteHeader, DeleteConfirmButton, DeleteCancelButton, DeleteContainer,
} from './styles';

const ProfileDelete = () => {
  const { t } = useLanguage();
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
      const res = await fetch('gametrail-backend-s4-production.up.railway.app/api/delete-user/', {
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
        {t('profile_delete_ask')}
      </DeleteHeader>
      <DeleteConfirmButton onClick={handleDelete}>
        {t('profile_delete_confirm')}
      </DeleteConfirmButton>
      <DeleteCancelButton onClick={() => setDeletePopup(false)}>
        {t('profile_delete_cancel')}
      </DeleteCancelButton>

    </DeletePopup>

  ) : null;

  return (
    <>
      <DeleteContainer>
        <DeleteButton onClick={handleDeleteSecondChance}>
          {t('profile_delete')}
        </DeleteButton>
      </DeleteContainer>

      {handleDeletePopupRender}

    </>

  );
};

export default ProfileDelete;
