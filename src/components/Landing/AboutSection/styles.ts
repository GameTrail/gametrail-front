import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.nord.gray3};
    padding-bottom: 2rem;
`;

export const About = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: 2rem;
    margin-left: 10rem;
    margin-right: 10rem;
    @media (max-width: 768px) {
        flex: 1;
        flex-direction: column;
        padding: 0 1rem;
        margin-left: 0;
        margin-right: 0;
    }
`;

export const Title = styled.h1`
    font-size: 2.4rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.nord.green};

    @media (max-width: 768px) {
        font-size: 2rem;
        text-align: center;
    }
`;

export const Description = styled.p`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.nord.white2};

    @media (max-width: 768px) {
        font-size: 1.2rem;
        text-align: center;
    }
`;
