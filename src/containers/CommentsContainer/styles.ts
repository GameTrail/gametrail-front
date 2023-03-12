import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    gap: 1em;
    width: 520px;
    margin-bottom: 25px;


    @media (max-width: 768px) {
        width: 90vw;
        flex-wrap: wrap;
    }    
`;
