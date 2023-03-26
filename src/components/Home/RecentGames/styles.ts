import styled from 'styled-components';
import Image from 'next/image';

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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 50vh;
    padding-left: 50%;
    padding-bottom: 70%;
  };
`;

export const CarouselContainer = styled.div` 
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  margin-top: 3%;
  padding-bottom: 35%;
  width: 30vw;
  height: 40vh;
  Image {
    justify-items: center;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 50vh;
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
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 50vh;
    font-size: 1rem;
    text-align: center;
  };
`;

export const CarouselImage = styled(Image)`
  padding: 6%;
  width: auto;
  height: auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  };
`;
