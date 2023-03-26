import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2.5%;

`;

export const CarouselContainer = styled.div` 
  display: flex;
  align-content: center;
  width: auto;
  height: auto;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 80%;
    height: auto;
  };
`;

export const Photo = styled.div`

  width: 95px;
  height: 450px;

  @media (max-width: 1024px) {
    width: 65px;
    height: 450px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 300px;
  }

  @media (max-width: 426px) {
    width: 25px;
    height: 220px;
  }

`;
