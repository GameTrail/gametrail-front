import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  padding: 2em 2em 2em 2em;
  margin: 1.6em 0 1.6em 0;
  box-shadow: 0 0 0.5em 0.1em ${({ theme }) => theme.nord.gray0};
  border-radius: 0.5em;
  background-color: ${({ theme }) => theme.nord.white0};
  color: ${({ theme }) => theme.nord.gray0};

  @media (max-width: 768px) {
    width: 85%;
  }
 
  @media (max-height:720px) {
    width: 85%;
    height: 100%;
  }
  @media (max-height:800px) {
    width: 85%;
    height: 100%;
  }
    @media (max-width: 475px) {
      height: 100%;
    }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.nord.white2};
`;
