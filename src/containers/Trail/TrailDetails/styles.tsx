import styled from 'styled-components';

export type ContainerProps = {
  darkMode: boolean;
};

export const Container = styled.div<ContainerProps>`
  flex-shrink: 0;
  width: 100%;
  height: 120%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  padding: 5% 0 5% 0;
  color: ${({ darkMode, theme }) => (darkMode ? theme.nord.white0 : theme.nord.gray0)};

    `;

export const TrailTitle = styled.h1`
  font-size: 7rem;    
  color: ${({ theme }) => theme.nord.purple};
  @media (max-width: 768px) {
font-size: 3rem;
  }
`;

export const TrailDescription = styled.p`
    padding-top:1rem;
  font-size: 2rem;
  @media (max-width: 768px) {
font-size: 1.5rem;
  }
`;

export const AdjustedContainer = styled.div`
    width: 90%;
    height: 100%;
    `;
