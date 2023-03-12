import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 40px 0;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    height: 100vh;
    background: ${({ theme }) => theme.nord.white2};
`;

export const Questions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 50vw;
`;

export const QuestionTitle = styled.h2`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.nord.gray0};
`;

export const QuestionAnswer = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.nord.gray3};
`;
