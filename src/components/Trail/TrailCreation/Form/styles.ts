import styled from 'styled-components';
import type { StylesConfig } from 'react-select';
import type { Game } from '@/models/Game/types';

export const Title = styled.h2`
  color: ${({ theme }) => theme.nord.white1};
  line-height: 1.2;
  text-align: center;
  font-size: 2rem;
  padding-bottom: 0.5em;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  };
`;

export const ErrorContainer = styled.div`
  text-align: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.nord.red};
  color: ${({ theme }) => theme.nord.white2};
  width: 100%;
  height: auto;
  margin: 0.15em;
  padding: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  };
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  margin-top: 10em;
  margin-bottom: 10em;
  padding-top: 5em;
  padding-bottom: 5em;
  width: 100%;
  @media (max-width: 490px) {
    width: 100%;
    height: 100%;
  }
  svg{
    transform: scale(2);
    margin: 0.1rem;
    color: ${({ theme }) => theme.nord.gray0};
  }
  h3{
    text-align: center;
    margin: 0 auto;
  }
  h5{
    text-align: left;
    font-weight: 400;
    margin: 0 auto;
    font-size: 1rem;
    @media (max-width: 768px) {
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.nord.white2};
  max-width: 60vw;
`;

export const PremiumFilterFirst = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  align-content: end;
  gap: 2rem;
  margin-top: 1rem;
  @media (max-width: 768px) {
    width: 100%;
    gap:0.5rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
    gap:0.5rem;
  }
  @media (max-width: 475px) {
    flex-direction: column;
  }
  div{
    input{
      width: 100%;
      font-size: 1.2rem;
    }
  }
`;

export const PremiumFilterSecond = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  align-content: end;
  gap: 0rem;
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap:0.5rem;
  }
  div{
    input{
      width: 80%;
      font-size: 1.2rem;
      margin:0 auto;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    label{
      margin-left: 2rem;
      text-align: left;
      @media (max-width: 768px) {
        margin-left: 0;
      }
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  padding: 1em;
  background-color: ${({ theme }) => theme.nord.white2};
  border: 0.1rem solid ${({ theme }) => theme.nord.white0};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: Unbounded;
`;

export const InputDate = styled.input`
  width: 90%;
  height: 2rem;
  background-color: ${({ theme }) => theme.nord.white2};
  border: 0.1rem solid ${({ theme }) => theme.nord.white0};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: Unbounded;
`;

export const InputTextArea = styled.textarea`
  width: 100%;
  height: 5rem;
  padding: 1em;
  background-color: ${({ theme }) => theme.nord.white2};
  border: 0.1rem solid ${({ theme }) => theme.nord.white0};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: Unbounded;
`;

export const DateFieldContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  align-content: end;
  flex-wrap: nowrap;
  padding: 0 0 0 0;
  margin: 0 0 0 3%;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const FieldContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    flex-wrap: nowrap;
    padding: 0 0 0 0;
    margin: 0 0 1.2em 0;
  
    `;

export const Button = styled.button`
  width: 100%;
  padding: 0.5em;
  border-radius: 0.5em;
  background-color: ${({ theme }) => theme.nord.white0};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.nord.green};
  }
  transition: background-color 0.2s;
  font-size: 1.7rem;
`;

export const GamesSelectorStyles: StylesConfig<Game> = {
  container: (styles) => ({
    ...styles,
    width: '100%',
    color: '#2E3440',
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: '#ECEFF4',
    overflowY: 'scroll',
    maxHeight: '100px',
  }),
};

export const PlanInfoToast = styled.div`
  background-color: ${({ theme }) => theme.nord.blue2};
  color: ${({ theme }) => theme.nord.gray0};;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding: 1em;
  margin-bottom: 1em;
  text-align: justify;
  transition: all 0.7s ease-in-out;
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 ${({ theme }) => theme.nord.red};;
    }
    50% {
      box-shadow: 0 0 0 5px ${({ theme }) => theme.nord.red};;
    }
    100% {
      box-shadow: 0 0 0 0 ${({ theme }) => theme.nord.red};;
    }
  }
  animation : pulse 1.5s ease-in-out infinite;
  @media (max-width: 1030px) {
    width: 70%;
    height: 100%;
    padding: 1.5rem;
    margin: 1rem;
  };
  @media (max-width: 768px) {
    width: 100%;
  };
`;
