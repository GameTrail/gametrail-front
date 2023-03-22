import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  justify-content: center;
  width: 50vw;
  height: 50vh;
  padding: 1%;
  @media (max-width: 768px) {
      flex-direction: column;         
      width: 100vw;         
      height: 100%;
      justify-content: center;
      padding: 1%;     
  };
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.nord.white1};
  line-height: 1.2;
  text-align: center;
  font-size: 4rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  };
`;

export const GameGangContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
      display: flex;
      flex-direction: column;   
      justify-content: center;
      width: 100%;
  };
`;

export const CrewContainer = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  width: 100vw;
  height: 100%;
  @media (max-width: 768px) {
      flex-direction: column;         
      width: 100%;         
      height: 100%;
      justify-content: center;
      padding-top: 1%;     
  };
`;

export const AuxContainer = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  width: 10vw;
  height: 40vh;
  @media (max-width: 768px) {
      flex-direction: column;         
      width: 100%;         
      height: 50vh;
      justify-content: center;
  };
`;
