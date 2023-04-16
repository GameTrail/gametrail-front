import React from 'react';
import useLanguage from '@/i18n/hooks';
import { Foot, Menu, MenuItem } from './styles';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <Foot>
      <h1>GAMETRAIL</h1>
      <Menu>
        <MenuItem href="/privacy">
          <h4>{t('privacy_policy')}</h4>
        </MenuItem>
        <MenuItem href="/disclaimer">
          <h4>{t('legal_notice')}</h4>
        </MenuItem>
        <MenuItem href="/contact">
          <h4>{t('contact')}</h4>
        </MenuItem>
        <MenuItem href="/terms">
          <h4>{t('terms_and_conditions')}</h4>
        </MenuItem>
        <MenuItem href="/cookiespolicy">
          <h4>{t('cookies_policy')}</h4>
        </MenuItem>
      </Menu>
    </Foot>
  );
};

export default Footer;
