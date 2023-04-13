import styled from 'styled-components';

export const Container = styled.div`
  font-size: 2.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.nord.white0};
  background-color: ${({ theme }) => theme.nord.gray1};
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray1};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 1rem;    
  width: 50%;
  height: 60%;
  font-style: normal;
  font-family: "Outfit", sans-serif;
  svg {
    width: 50%;
    height: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.8rem;
    svg {
      width: 30%;
      height: 30%;
   @keyframes change {
  0% {
    color: ${({ theme }) => theme.nord.blue0};
    transform: rotate(0deg) translate(0px, 0px);
  }
  10% {
    color: ${({ theme }) => theme.nord.blue1};
    transform: rotate(5deg) translate(0px, 0px);
  }
  20% {
    color: ${({ theme }) => theme.nord.blue2};
    transform: rotate(10deg) translate(0px, 0px);
  }
  30% {
    color: ${({ theme }) => theme.nord.blue3};
    transform: rotate(15deg) translate(0px, -5px);
  }
  40% {
    color: ${({ theme }) => theme.nord.green};
    transform: rotate(20deg) translate(0px, -5px);
  }
  50% {
    color: ${({ theme }) => theme.nord.yellow};
    transform: rotate(0deg) translate(0px, 0px);
  }
  60% {
    color: ${({ theme }) => theme.nord.orange};
    transform: rotate(-5deg) translate(-5px, 0px);
  }
  70% {
    color: ${({ theme }) => theme.nord.red};
    transform: rotate(-10deg) translate(0px, 0px);
  }
  80% {
    color: ${({ theme }) => theme.nord.purple};
    transform: rotate(-15deg) translate(0px, 6px);
  }
  90% {
    color: ${({ theme }) => theme.nord.beige};
    transform: rotate(-20deg) translate(0px, 6px);
  }
  100% {
    color: ${({ theme }) => theme.nord.blue0};
    transform: rotate(0deg) translate(0px, 0px);
  }
}
    animation: change 3s linear infinite;
    margin-left: 1rem;
  }
  }
  @media (max-width: 1030px) {
    width: 50%;
    font-size: 1.8rem;
  }
  svg {
   @keyframes change {
  0% {
    color: ${({ theme }) => theme.nord.blue0};
    transform: rotate(0deg) translate(0px, 0px);
  }
  10% {
    color: ${({ theme }) => theme.nord.blue1};
    transform: rotate(5deg) translate(0px, 0px);
  }
  20% {
    color: ${({ theme }) => theme.nord.blue2};
    transform: rotate(10deg) translate(0px, 0px);
  }
  30% {
    color: ${({ theme }) => theme.nord.blue3};
    transform: rotate(15deg) translate(0px, -5px);
  }
  40% {
    color: ${({ theme }) => theme.nord.green};
    transform: rotate(20deg) translate(0px, -5px);
  }
  50% {
    color: ${({ theme }) => theme.nord.yellow};
    transform: rotate(0deg) translate(0px, 0px);
  }
  60% {
    color: ${({ theme }) => theme.nord.orange};
    transform: rotate(-5deg) translate(-5px, 0px);
  }
  70% {
    color: ${({ theme }) => theme.nord.red};
    transform: rotate(-10deg) translate(0px, 0px);
  }
  80% {
    color: ${({ theme }) => theme.nord.purple};
    transform: rotate(-15deg) translate(0px, 6px);
  }
  90% {
    color: ${({ theme }) => theme.nord.beige};
    transform: rotate(-20deg) translate(0px, 6px);
  }
  100% {
    color: ${({ theme }) => theme.nord.blue0};
    transform: rotate(0deg) translate(0px, 0px);
  }
}
    animation: change 3s linear infinite;
    margin-left: 1rem;
  }
`;
