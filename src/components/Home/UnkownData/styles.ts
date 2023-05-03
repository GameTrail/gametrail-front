import styled from 'styled-components';

export const Title = styled.h1`
  color : ${({ theme }) => theme.nord.gray1};
  line-height: 1.2;
  text-align: center;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  };
`;

export const Container = styled.div` 
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 6%;
  padding-bottom: 6%;
  overflow: visible;
  align-content: center;
  flex-wrap: nowrap;
  gap: 40px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
  };
`;

export const CuriosityContainer = styled.div` 
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: visible;
  align-content: center;
  flex-wrap: nowrap;
  gap: 40px;
  svg {
    min-width: 40vw;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    padding-bottom: 0;
    svg {
      min-width: 100vw;
    }
  };
`;
