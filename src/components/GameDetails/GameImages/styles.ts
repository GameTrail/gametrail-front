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
  width: 50%;
  height: auto;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 90%;
    height: auto;
  };
`;

export const Photo = styled.div`

  width: 100%;
  height: auto;

`;
