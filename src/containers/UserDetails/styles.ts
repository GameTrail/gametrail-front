import styled from 'styled-components';

export type ContainerProps = {
  darkMode: boolean;
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
    padding: 0 20px;

    background-color: ${({ darkMode, theme }) => (darkMode ? theme.nord.gray0 : theme.nord.white0)};
`;
