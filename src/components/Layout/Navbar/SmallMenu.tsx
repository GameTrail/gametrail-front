import type { FC } from 'react';
import React from 'react';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LanguagesSelector from '@/components/LanguagesSelector';
import type { UserCookie } from '@/components/Login/LoginComponent/types';
import useLanguage from '@/i18n/hooks';
import {
  Avatar,
  LogoutItem, MenuItem, Premium,
} from './styles';

export type Props = {
  userCookie: UserCookie | null;
  handleStripeCheckout: (event: any) => void;
};

const SmallMenu: FC<Props> = ({ userCookie, handleStripeCheckout }) => {
  const { t } = useLanguage();
  return (
    <>
      <LanguagesSelector isNavbar />
      <MenuItem href="/home">
        <h4>{t('home')}</h4>
      </MenuItem>
      <MenuItem href="/games">
        <h4>{t('games')}</h4>
      </MenuItem>
      {userCookie && (
        <>
          <MenuItem href="/trail/create">
            <h4>{t('create_trail')}</h4>
          </MenuItem>
          <MenuItem href={`/user/${userCookie?.id}`}>
            <Avatar src={userCookie.avatar} alt="No hay imagen" />
          </MenuItem>
          {userCookie?.plan === 'STANDARD' && (
          <Premium onClick={handleStripeCheckout}>
            <h4>Premium</h4>
          </Premium>
          )}

          <LogoutItem href="/auth/logout">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </LogoutItem>
        </>
      )}
    </>
  );
};

export default SmallMenu;
