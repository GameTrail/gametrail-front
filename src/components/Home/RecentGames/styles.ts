import styled from 'styled-components';
import Image from 'next/image';

export const Title = styled.h1`
  color: ${({ theme }) => theme.nord.gray2};
  line-height: 1.2;
  text-align: center;
  font-size: 1.6rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  };
`;

export const Container = styled.div` 
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
`;

export const CarouselContainer = styled.div` 
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  margin-top: 3%;
  padding-top: 3px;
  width: 25vw;
  height: 50vh;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 80vw;
    height: 40vh;
  };
`;

export const CarouselImage = styled(Image)`
  border-radius: 9px;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
  padding-left: 3%;
  padding-right: 3%;
  width: auto;
  height: auto;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 80vw;
    height: 40vh;
  };
`;
