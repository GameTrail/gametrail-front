import styled from 'styled-components';

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  height: 70vh;
  margin: 3%;
  padding: 5%;
  text-align: center;
  align-items: center;
  border-radius: 30px;
  svg{
    max-height: 70vh;
  }  
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3}; 
  background-color: ${({ theme }) => theme.nord.gray0};
  @media (max-width: 768px) {
      flex-direction: column;         
      width: 80vw;         
      height: 100%;
      justify-content: center;
      padding-top: 10px;   
      svg{
        max-height: 40vh;
      }  
  };
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;         
      width: 80vw;         
      height: 100%;
      justify-content: center;
      padding-top: 10px; 
      svg{
        max-height: 40vh;
      }  
  };
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.nord.white1};
  line-height: 1.2;
  text-align: center;
  font-size: 1.6rem;
  padding: 5%;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  };
`;

export const Container = styled.div`
  padding-bottom: 5%;
  @media (max-width: 768px) {
    padding-bottom: 5%;
  };
`;

export const LoginForm = styled.form`
  width: 100%;
  height: 100%;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.nord.white1};
  font-size: 1.2em;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  };
`;

export const Input = styled.input`
  padding: 15px;
  margin: auto;
  display: flex;
  border-radius: 9px;
  background: ${({ theme }) => theme.nord.white1};
  color: ${({ theme }) => theme.nord.gray1};
  width: 100%;
  max-width: 400px;
  outline: none;
  border: none;
  font-size: 1em;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  };
`;

export const ErrorContainer = styled.div`
  text-align: center;
  border-radius: 8px;
  background-color: #ff7373;
  border-color: black;
  width: 80%;
  height: auto;
  margin: auto;
`;
