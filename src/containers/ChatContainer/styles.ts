import styled from 'styled-components';

export const MessagesContainer = styled.ul`
  width: 100%;
  height: 20rem;
  background-color: ${({ theme }) => theme.nord.gray1};
  border-radius: 1.5rem;
  color: ${({ theme }) => theme.nord.white0};
  overflow: auto;
  @media (max-width: 768px) {
    width: 90vw;
    flex-wrap: wrap;
  }    
`;

export const Container = styled.ul`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  color: ${({ theme }) => theme.nord.white0};
`;

export const DivContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding-top: 1rem;
    border-radius: 1rem;
    margin-bottom: 0.2rem;
`;

export const InputField = styled.input`
    box-sizing: border-box;
    padding: 0.7rem;
    width: 89%;
    flex-grow: 1; 
    border-radius: 10px;
    @media (max-width: 768px) {
      width: 90vw;
      flex-wrap: wrap;
    }    
`;

export const Button = styled.button`
    padding: 0.8rem;
    width: 10%;
    background-color: ${({ theme }) => theme.nord.gray1};
    color: ${({ theme }) => theme.nord.white1};
    font-size: 1.4rem;
    border-radius: 1.5rem;
    color: ${({ theme }) => theme.nord.white1};
    margin-left: 0.4rem;
    margin-top: 1rem;
    @media (max-width: 768px) {
      margin-left: 0;
      width: 90vw;
      flex-wrap: wrap;
    }    
`;
