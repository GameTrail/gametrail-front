import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 80vw;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 5em;
  margin-top: 3em;
  margin-bottom: 3em;
  box-shadow: 0 0 0.5em 0.1em ${({ theme }) => theme.nord.gray0};
  border-radius: 0.5em;
  background: ${({ theme }) => theme.nord.gray3};
  color: ${({ theme }) => theme.nord.gray0};
  @media (max-width: 768px) {
    flex-direction: column;         
    width: 90vw;         
    height: 100%;
    justify-content: center;
  };
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;         
    width: 100%;         
    height: 100%;
    justify-content: center;
  };
`;
