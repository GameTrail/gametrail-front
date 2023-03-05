import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1rem 0;
    }
`;

export const Left = styled.div`
    display: flex;
    flex: 1;
    height: 70vh;
    
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    
    margin-left: 9rem;
    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

export const Right = styled.div`
    display: flex;
    flex: 1;
    min-height: 20vh;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    margin-right: 9rem;
    @media (max-width: 768px) {
        margin-top: 2rem;
        margin-right: 0;
    }
`;

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    height: 30vh;
    gap: 3rem;
    @media (max-width: 768px) {
        height: 10vh;
    }
`;

export const AuthButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1.4rem;

    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
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
    background: ${({ theme, primary }) => (primary ? theme.nord.white0 : theme.nord.gray1)};

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

export const Title = styled.h1`
    font-size: 4rem;
    color: ${({ theme }) => theme.nord.gray0};
    
    @media (max-width: 768px) {
        text-align: center;
        font-size: 3.4rem;
    }
`;

export const Subtitle = styled.h2`
    margin-top: 5vh;
    margin-bottom: 5vh;
    font-size: 1.2rem;
    @media (max-width: 768px) {
        text-align: center;
        padding: 0 1rem;
    }
    color: ${({ theme }) => theme.nord.gray3};
`;
