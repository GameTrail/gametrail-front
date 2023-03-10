import styled from 'styled-components';
import Image from 'next/image';

export const GangContainer = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  width: 60%;
  height: 50%;
  padding: 1%;
  border-width: 5px;
  border-style: solid;
  background-color: ${({ theme }) => theme.nord.gray0};
  border-radius: 12px;
  border-color: ${({ theme }) => theme.nord.gray1};
  @media (max-width: 768px) {
      flex-direction: column;         
      width: 100vw;         
      height: 100%;
      justify-content: center;
      padding-top: 10px;     
  };
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.nord.white1};
  line-height: 1.2;
  text-align: center;
  font-size: 1.6rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  };
`;

export const AuxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  background-color: ${({ theme }) => theme.nord.gray0};
  border-radius: 12px;
  @media (max-width: 768px) {
      flex-direction: row;         
      width: 100%;         
      height: 100%;
      justify-content: center;
      padding-top: 10px;     
    };
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
  border-width: 5px;
  border-radius: 12px;
  border-style: solid;
  padding: 2% 2% 2% 2%;
  justify-content: center;
  border-color: ${({ theme }) => theme.nord.gray0};
  background-color: ${({ theme }) => theme.nord.gray2};
  @media (max-width: 768px) {
      flex-direction: row;
      width: 100%;         
      height: 20%;   
    };
`;

export const DataText = styled.text`
  color: ${({ theme }) => theme.nord.white0};
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
  border-width: 5px;
  border-radius: 50px;
  border-style: solid;
  border-color: ${({ theme }) => theme.nord.gray1};
  background-color: ${({ theme }) => theme.nord.white0};
  @media (max-width: 768px) {
      flex-direction: row;
      width: 100%;         
      height: 20%;   
    };
`;

export const ProfilePicture = styled(Image)`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 30px;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3}; 
  @media (max-width: 768px) {         
    width: 20%;         
    height: 20%;
    border-radius: 40px;
  };
`;

export const PlayerData = styled.h3`
  color: ${({ theme }) => theme.nord.gray0};
  font-size: 1.2rem;
  padding: 2% 0% 2% 30%;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 6% 0% 6% 18%;
  };
`;
