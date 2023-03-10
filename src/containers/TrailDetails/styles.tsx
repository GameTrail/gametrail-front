import styled from 'styled-components';

export type ContainerProps = {
  darkMode: boolean;
};

export const Container = styled.div<ContainerProps>`
  flex-shrink: 0;
  width: 100%;
  height: 114%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  padding: 5%;
  color: ${({ darkMode, theme }) => (darkMode ? theme.nord.white0 : theme.nord.gray0)};

  background-color: ${({ darkMode, theme }) => (darkMode ? theme.nord.gray0 : theme.nord.white0)};
    `;

export const TrailTitle = styled.h1`
  font-size: 2.5rem;    
  color: ${({ theme }) => theme.nord.purple};
`;

export const TrailDescription = styled.p`
    font-size: 1.5rem;
    padding-top:1rem;
`;
