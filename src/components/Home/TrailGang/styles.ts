import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    height: auto;
    padding-top: 5%;
    padding-bottom: 2.5%;
    background-color: ${({ theme }) => theme.nord.gray2};
    svg {
      min-width: 25vw;
    }
    @media (max-width: 768px) {
    flex-direction: column;         
    width: 100%;         
    height: 100%;
    justify-content: center;
    padding-top: 10px; 
      svg {
        width: 30vw;
      } 
  };
`;

export const About = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    text-align: center;
    padding-bottom: 5%;
    background-color: ${({ theme }) => theme.nord.gray2};
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

export const Description = styled.h3`
    font-size: 1.6rem;
    padding: 3%;
    color: ${({ theme }) => theme.nord.white2};
    @media (max-width: 768px) {
        font-size: 0.9rem;
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 100%;
        margin-bottom: 5%;
    }
`;

type ButtonProps = {
  primary?: boolean;
  animated?: boolean;
};

export const Button = styled.button<ButtonProps>`
    height: auto;
    width: 20%;
    border-radius: 9px;
    padding: 20px 10px;
    font-size: 1.4rem;
    border: none;
    cursor: pointer;
    color: ${({ theme, primary }) => (primary ? theme.nord.gray1 : theme.nord.white2)};
    background: ${({ theme, primary }) => (primary ? theme.nord.blue0 : theme.nord.blue1)};

    ${({ animated }) => animated
        && `
        animation: bounce 1s;
        animation-iteration-count: infinite;
        
        @keyframes bounce {
            0% {
                scale: 1;
            }
            50% {
                scale: 1.05;
            } 
            100% {
                scale: 1;
            }
        }
    `};

    @media (max-width: 768px) {
        width: 60vw;
    }
    &:hover {
        transform: ${({ primary }) => (primary ? 'scale(1.05)' : 'none')};
        transition: transform 0.2s;
        box-shadow: 0 0 3px ${({ theme }) => theme.nord.gray2};
    }
`;
