import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.nord.white0};
    border-radius: 8px;

    gap: 0.5rem;
    margin-top: 1em;
    margin-bottom: 1em;
    border: 1px solid red;
    
    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
    };
`;

export type ButtonProps = {
  active: boolean;
};

export const Button = styled.button<ButtonProps>`
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    padding: 10px 20px;
    color: ${({ theme }) => theme.nord.white0};
    border-radius: 8px;
    border: none;
    background-color: ${({ theme }) => theme.nord.gray3};

    &:hover {
        transition: all 0.3s ease-in-out;
        box-shadow: 0 0 10px 0;
        background-color: ${({ theme }) => theme.nord.gray1};
    }

    @media (max-width: 768px) {
        font-size: 1rem;
            font-weight: 400;
            padding: 10px 20px;
            border-radius: 8px;
    }
`;
