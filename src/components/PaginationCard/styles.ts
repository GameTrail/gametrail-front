import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 10px;
`;

interface PageButtonProps {
  active?: boolean;
}
export const PageButton = styled.button<PageButtonProps>`
    width: 80px;
    height: 50px;
    background-color: ${({ theme, active }) => (active ? theme.nord.white0 : theme.nord.gray0)};
    color: ${({ theme, active }) => (active ? theme.nord.gray0 : theme.nord.white0)};
    border: ${({ theme }) => `1px solid ${theme.nord.gray0}`};
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.nord.white0};
        color: ${({ theme }) => theme.nord.gray0};
    }
`;

export const PageText = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.white0};
`;
