import styled from 'styled-components';

export const Container = styled.div`
  font-size: 2.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.nord.white0};
  background-color: ${({ theme }) => theme.nord.gray1};
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray1};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 1rem;    
  width: 50%;
  height: 60%;
  font-style: normal;
  font-family: "Outfit", sans-serif;
  @media (max-width: 768px) {
    width: 60%;
    font-size: 1.8rem;
¡  }
  svg {
    margin-left: 0.5rem;
  }
`;
