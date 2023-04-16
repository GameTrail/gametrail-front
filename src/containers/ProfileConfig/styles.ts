import styled from 'styled-components';

export const MainContainer = styled.div`
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.nord.gray3};
  text-align: left;
  font-size: 2.4rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 25%;
  margin-right: auto; 
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 1rem;
  }
`;

export const Separator = styled.hr`
  width: 50%;
  height: 1px;
  background-color: ${({ theme }) => theme.nord.gray3};
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto; 
  text-align: center; 
  @media (max-width: 768px) {
    margin-left: 1rem;
    width: 90%;
  }
`;

export const MainHeader = styled.h1`
  color: ${({ theme }) => theme.nord.gray3};
  text-align: center;
  font-size: 2.4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
