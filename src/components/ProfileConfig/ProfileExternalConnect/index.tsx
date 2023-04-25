import React, { useState } from 'react';
import useLanguage from '@/i18n/hooks';
import {
  ExternalConnectContainer, ExternalConnectImage, ExternalConnectButton, MainContainer,
} from './styles';

const ProfileExternalConnect = () => {
  const { t } = useLanguage();
  const [connected, setConnected] = useState(false);

  const handleSteamConnect = async () => {
    setConnected(true);
  };

  const handleXboxConnect = () => {
  };

  return (
    <MainContainer>
      <ExternalConnectContainer>
        <ExternalConnectImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/768px-Steam_icon_logo.svg.png" alt="Steam Logo" />

        {connected ? (
          <p>{t('connected_to_steam')}</p>
        ) : (
          <ExternalConnectButton data-testid="SteamButton" onClick={handleSteamConnect}>
            {t('connect')}
          </ExternalConnectButton>
        )}

      </ExternalConnectContainer>

      <ExternalConnectContainer>
        <ExternalConnectImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1200px-Xbox_one_logo.svg.png" alt="Xbox Logo" />

        <ExternalConnectButton data-testid="XboxButton" onClick={handleXboxConnect}>
          {t('connect')}
        </ExternalConnectButton>

      </ExternalConnectContainer>

    </MainContainer>
  );
};

export default ProfileExternalConnect;
