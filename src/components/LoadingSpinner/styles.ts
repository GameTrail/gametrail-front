import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 75vh;
`;

const skRotateplane = keyframes`
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`;

export const Spinner = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.nord.gray3}; 
  margin: 100px auto;
  animation: ${skRotateplane} 1.2s infinite ease-in-out;
  -webkit-animation: ${skRotateplane} 1.2s infinite ease-in-out;
`;
