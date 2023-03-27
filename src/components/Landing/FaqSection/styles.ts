import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-x: hidden;
    width: 100%;
    h1{
         font-size: 2.4rem;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.nord.purple};

        @media (max-width: 768px) {
            font-size: 2rem;
            text-align: center;
            height: 100vh;
        }
    }
    height: 100vh;
    padding: 1rem 0;
    background: ${({ theme }) => theme.nord.white0};
`;

export const Questions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 80vw;
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
    text-align: center;
`;

export const QuestionTitle = styled.h2`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.nord.gray0};
     @media (max-width: 768px) {
        font-size: 1.4rem;
        text-align: center;
    }
`;

export const QuestionAnswer = styled.p`
  font-size: 1.2rem;
    color: ${({ theme }) => theme.nord.gray3};
    text-align: justify;
    width: 80%;
    @media (max-width: 768px) {
        font-size: 1rem;
        text-align: center;
        width: 100%;
    }
`;
