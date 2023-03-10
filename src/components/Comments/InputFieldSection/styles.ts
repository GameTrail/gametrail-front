import styled from 'styled-components';

// css for the comments section
export const DivContainer = styled.div`
    width: 85%;
    border-radius: 1rem;
    display: flex;
    margin-bottom: 2rem;
    border-radius: 10px;
`;

export const InputField = styled.input`
    padding: 1.2rem;
    flex-grow: 1; 
    border-radius: 10px;
`;

export const Button = styled.button`
    padding: 1.3px;
    background-color: ${({ theme }) => theme.nord.gray1};
    color: ${({ theme }) => theme.nord.white1};
    font-size: 1.5rem;
    flex-basis: 5%;
    border: none;
    border-radius: 10px;
    color: $;
    margin-left: 10px;
    cursor: pointer;
`;
