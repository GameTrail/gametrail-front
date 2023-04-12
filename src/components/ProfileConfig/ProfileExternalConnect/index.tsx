import React from 'react';
import {
  ExternalConnectContainer, ExternalConnectImage, ExternalConnectButton, MainContainer,
} from './styles';

const ProfileExternalConnect = () => {
  const handleSteamConnect = () => {
  };

  const handleXboxConnect = () => {
  };

  return (
    <MainContainer>
      <ExternalConnectContainer>
        <ExternalConnectImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/768px-Steam_icon_logo.svg.png" />

        <ExternalConnectButton onClick={handleSteamConnect}>
          Conectar
        </ExternalConnectButton>

      </ExternalConnectContainer>

      <ExternalConnectContainer>
        <ExternalConnectImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1200px-Xbox_one_logo.svg.png" />

        <ExternalConnectButton onClick={handleXboxConnect}>
          Conectar
        </ExternalConnectButton>

      </ExternalConnectContainer>

    </MainContainer>

  );
};

export default ProfileExternalConnect;
