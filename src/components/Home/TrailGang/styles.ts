import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    height: 80vh;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.nord.gray1};
    svg {
      min-width: 25vw;
    }
    @media (max-width: 768px) {
    flex-direction: column;         
    width: 100vh;         
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
    padding-bottom: 10vh;
    background-color: ${({ theme }) => theme.nord.gray1};
    @media (max-width: 768px) {
        flex: 1;
        flex-direction: column;
        padding: 0 1rem;
        margin-left: 0;
        margin-right: 0;
    }
`;

export const Description = styled.p`
    font-size: 1.6rem;
    padding: 3%;
    color: ${({ theme }) => theme.nord.white2};
    @media (max-width: 768px) {
        font-size: 1.2rem;
        text-align: center;
    }
`;

type ButtonProps = {
  primary?: boolean;
  animated?: boolean;
};

export const Button = styled.button<ButtonProps>`
    height: 60px;
    width: 200px;
    border-radius: 9px;
    padding: 0 10px;
    font-size: 1.4rem;
    border: none;
    cursor: pointer;
    color: ${({ theme, primary }) => (primary ? theme.nord.gray1 : theme.nord.white2)};
    background: ${({ theme, primary }) => (primary ? theme.nord.blue0 : theme.nord.blue0)};

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
    `}

    @media (max-width: 768px) {
        width: 90%;
    }
    &:hover {
        transform: ${({ primary }) => (primary ? 'scale(1.05)' : 'none')};
        transition: transform 0.2s;
        box-shadow: 0 0 3px ${({ theme }) => theme.nord.gray2};
    }
`;
