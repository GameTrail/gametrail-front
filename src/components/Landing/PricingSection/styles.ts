import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    gap: 3rem;
    overflow-x: hidden;

    @media (max-width: 768px) {
        margin-top: 3rem;
        padding: 1rem 0;
    }
`;
