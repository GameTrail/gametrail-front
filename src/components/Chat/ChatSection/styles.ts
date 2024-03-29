import styled from 'styled-components';

// css for the comments section
export const ChatContainer = styled.div`
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.nord.gray1};
    padding-left: 1rem;
    padding-right: 1rem;
    div div:last-child {
        margin-botton:0;   
    }
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
