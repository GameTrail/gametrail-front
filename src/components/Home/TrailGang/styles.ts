import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.nord.white2};
  line-height: 1.2;
  text-align: center;
  font-size: 1.6rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  };
`;

export const Container = styled.div` 
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
  background: linear-gradient(180deg, #2e3440 0%, #4c566a 100%);
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  };
`;

export const ContainerAux = styled.div` 
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 3%;
  padding-bottom: 3%;
  @media (max-width: 768px) {
    flex-direction: column;         
    width: 100%;         
    height: 100%;
    justify-content: center;
    padding-top: 10px;  
  };
`;
