import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300 px;
    overflow: auto;
    gap: 1em;
    width: 520px;
    margin-bottom: 25px;


    @media (max-width: 768px) {
        width: 90vw;
        flex-wrap: wrap;
    }    
`;

export const DivContainer = styled.div`
    width: 100%;
    border-radius: 1rem;
    display: flex;
    margin-bottom: 0.2rem;
`;

export const InputField = styled.input`
    padding: 0.7rem;
    flex-grow: 1; 
    border-radius: 10px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.nord.gray1};
    color: ${({ theme }) => theme.nord.white1};
    font-size: 1.2rem;
    flex-basis: 5%;
    border-radius: 10px;
    color: ${({ theme }) => theme.nord.white1};
    margin-left: 10px;
`;
