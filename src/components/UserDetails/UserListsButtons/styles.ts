import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.nord.white0};
    border-radius: 8px;

    gap: 3rem;
    margin-top: 1em;
    margin-bottom: 1em;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
        gap:0.5rem;
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
    border-radius: 8px;
    border: ${({ theme, active }) => (active ? `1px solid ${theme.nord.gray3};` : 'none;')}
    width: 200px;

    background-color: ${({ theme, active }) => (active ? theme.nord.white0 : theme.nord.gray3)};
    color: ${({ theme, active }) => (active ? theme.nord.gray3 : theme.nord.white0)};

    &:hover {
        transition: all 0.3s ease-in-out;
        box-shadow: 0 0 10px 0;
        background-color: ${({ theme, active }) => (active ? theme.nord.white0 : theme.nord.gray3)};
    }

    @media (max-width: 768px) {
        width: 105px;
        font-size: 0.8rem;
        font-weight: 400;
        padding: 10px 20px;
        border-radius: 8px;
    }
`;
