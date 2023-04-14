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

const BigMenu: FC<Props> = ({ userCookie, handleStripeCheckout }) => {
  const { t } = useLanguage();
  return (
    <>
      <LanguagesSelector isNavbar />
      <MenuItem href="/home">
        <p>{t('home')}</p>
      </MenuItem>
      <MenuItem href="/games">
        <p>{t('games')}</p>
      </MenuItem>
      <MenuItem href="/trails">
        <p>{t('trails')}</p>
      </MenuItem>
      {userCookie && (
        <>
          <MenuItem href="/trail/create">
            <p>{t('create_trail')}</p>
          </MenuItem>
          <MenuItem href={`/user/${userCookie?.id}`}>
            <Avatar src={userCookie.avatar} alt="No hay imagen" />
          </MenuItem>
          {userCookie?.plan === 'STANDARD' && (
          <Premium onClick={handleStripeCheckout}>
            <p>{t('become_premium')}</p>
          </Premium>
          )}
          <LogoutItem href="/auth/logout">
            <FontAwesomeIcon icon={faArrowRightFromBracket} width={20} height={20} />
          </LogoutItem>
        </>
      )}
    </>
  );
};

export default BigMenu;
