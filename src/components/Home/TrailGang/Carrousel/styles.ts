import styled from 'styled-components';
import Image from 'next/image';

export const CarouselContainer = styled.div` 
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  margin-top: 3%;
  width: 20vw;
  height: 30vh;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100vw;
    height: 40vh;
  };
`;

export const CarouselImage = styled(Image)`
  border-radius: 9px;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
`;
