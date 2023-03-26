import type { DefaultTheme } from 'styled-components';
import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 2em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const GameImage = styled(Image)`

  box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
  transition: all 0.3s ease-in-out;

`;

export const GameInfo = styled.div`
    width:50%;
    height:auto;
    align-content: center;

    @media (max-width: 768px) {
      width: 80%;
    }

    @media (max-width: 426px) {
      width: 70%;
    }

`;

export const Title = styled.h1`
    font-size: 3rem;
    text-align: left;
    margin-bottom: 2.5%;
    color: ${({ theme }) => theme.nord.gray3};
    
    @media (max-width: 768px) {
        text-align: center;
        font-size: 3.4rem;
    }
`;

export const GameDescription = styled.p`
    width: auto;
    height: auto;
    font-weight: 600;
    font-style: normal;
    font-family: "Outfit", sans-serif;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 1.2;
    text-align: justify;
    color: ${({ theme }) => (theme.nord.gray1)};
`;

export type GamePlatformProps = {
  platform: PlatformType | string;
};

export enum PlatformType {
  Nintendo = 'Nintendo',
  PlayStatition = 'PlayStation',
  Xbox = 'Xbox',
}

export const PlatformContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  @media (max-width: 768px) {
    justify-content:center;
  }
`;

const handlePlatformColor = (theme : DefaultTheme, platform : string) => {
  if (platform.includes('PlayStation')) return theme.nord.blue3;
  if (platform.includes('Xbox')) return theme.nord.green;
  if (platform.includes('Nintendo')) return theme.nord.red;
  return theme.nord.gray3;
};

export const GamePlatform = styled.p<GamePlatformProps>`
    width: auto;
    height: auto;
    padding: 10px 20px 10px 20px;
    margin-right: 2%;
    border-radius: 10px;
    font-weight: 600;
    font-style: normal;
    font-family: "Outfit", sans-serif;
    font-size: 16px;
    white-space:nowrap;
    text-align: center;
    background-color: ${({ theme, platform }) => () => handlePlatformColor(theme, platform)};
    color: ${({ theme }) => (theme.nord.white2)};

    @media (max-width: 768px) {
      width: 40%;
      margin-top: 2.5%;
    }

    @media (max-width: 426px) {
      width: 100%;
      margin-top: 2.5%;
    }
`;

export const GameButtons = styled.div`
  margin-top: 5%;

  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;

  width: auto;
  height: auto;
  gap: 2em;

  @media (max-width: 768px) {
    justify-content:center;
  }
    
`;

export const AddButton = styled.p`

  width: auto;
  height: 40%;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  font-weight: 600;
  font-style: normal;
  font-family: "Outfit", sans-serif;
  font-size: 24px;
  white-space:nowrap;
  text-align: center;
  background-color: ${({ theme }) => (theme.nord.purple)};
  color: ${({ theme }) => (theme.nord.white2)};
  margin-bottom: 5%;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;
