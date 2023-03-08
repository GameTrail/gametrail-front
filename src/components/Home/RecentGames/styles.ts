import styled from 'styled-components';
import Image from 'next/image';

export const Title = styled.h1`
  color: ${({ theme }) => theme.nord.white2};
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
  padding-bottom: 6%;
  background: #4c566a;
  overflow: visible;
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
  width: 20vw;
  height: 30vh;
  @media (max-width: 768px) {
    width: 70vw;
    height: 40vh;
  };
`;

export const CarouselImage = styled(Image)`
  border-radius: 9px;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
  padding: 3%;
`;
