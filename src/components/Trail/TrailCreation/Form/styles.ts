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
    display: flex;
    font-size: 1.5rem;
    text-align: center;
    margin-top: -4em;
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
    display: flex;
    text-align: center;
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
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 2em;
    margin-bottom: 2em;
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
  @media (max-width: 768px) {
      font-size: 0.8rem;
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
  font-family: Unbounded,serif;
  @media (max-width: 768px) {
      font-size: 0.5rem;
      width: 100%;
    }
`;

export const InputTextArea = styled.textarea`
  width: 100%;
  height: 5rem;
  padding: 1em;
  background-color: ${({ theme }) => theme.nord.white2};
  border: 0.1rem solid ${({ theme }) => theme.nord.white0};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: Unbounded,serif;
  @media (max-width: 768px) {
      font-size: 0.5rem;
      text-align: center;
      width: 100%;
    }
`;

export const DateFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const InputDate = styled.input`
  width: 90%;
  height: 2rem;
  background-color: ${({ theme }) => theme.nord.white2};
  border: 0.1rem solid ${({ theme }) => theme.nord.white0};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: Unbounded,serif;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
      font-size: 0.5rem;
      text-align: center;
      width: 100%;
    }
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
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    text-align: center;
    width: 100%;
  }
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
  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 0.5rem;
    text-align: center;
    width: 100%;
    height: 100%;
  }
`;
