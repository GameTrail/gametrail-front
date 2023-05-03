import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.nord.gray2};
  line-height: 1.2;
  text-align: center;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  };
`;

export const Container = styled.div` 
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
  justify-content: center;
  flex-wrap: nowrap;
  
  @media (max-width: 768px) {
    width: 100%;
  };
`;

export const CarouselContainer = styled.div` 
  display: flex;
  align-content: center;
  margin-top: 3%;
  margin-bottom: 3%;
  width: 40%;
  height: auto;
  Image {
    justify-items: center;
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 90vw;
    padding-bottom: 0;
  };
`;

export const Description = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.nord.gray2};
    flex-direction: column;
    font-size: 1.6rem;
    padding: 5%;
    text-align: center;
    color: ${({ theme }) => theme.nord.white0};
    @media (max-width: 768px) {
    width: 100vw;
    padding: 2.5%;
    font-size: 1rem;
  };
`;

export const CarouselImage = styled.div`
  width: 100%;
  height: auto;
`;
