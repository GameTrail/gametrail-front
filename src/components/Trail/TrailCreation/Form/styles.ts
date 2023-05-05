import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { StylesConfig } from 'react-select';
import type { Game } from '@/models/Game/types';

export const CreateContainer = styled.div`
max-width: 1200px;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding-top: 20px;
padding-bottom: 20px;
background-color: ${({ theme }) => theme.nord.gray3};
border-radius: 22px;
`;

export const FormContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
@media (max-width: 768px) {
  flex-direction: column;
}
`;

export const StandarContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const MotionStandarContainer = motion(StandarContainer);

export const LottieContainer = styled.div`
  width: 30%;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.nord.white1};
  line-height: 1.2;
  text-align: center;
  font-size: 25px;
  padding-bottom: 0.5em;
  @media (max-width: 768px) {
    display: flex;
    font-size: 20px;
    text-align: center;
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
  margin: 10%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .crown{
        color: ${({ theme }) => theme.nord.yellow};
        @keyframes changeColor {
            0% {
                color: #ee7752
            }
           
            20% {
                color: #e73c7e
            }
            40% {
                color: #23a6d5
            }
            60% {
                color: #23d5ab
            }
            80% {
                color: #e73c7e
            }
            100% {
                color: #ee7752
            }
     }
        animation: changeColor 2s linear infinite;
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
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.nord.white2};
  max-width: 60vw;
  font-size: 15px;
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
  font-size: 12px;
  font-family: Unbounded,serif;
  @media (max-width: 768px) {
      font-size: 0.5rem;
      width: 100%;
    }
`;

export const InputTextArea = styled.textarea`
  padding: 1em;
  background-color: ${({ theme }) => theme.nord.white2};
  border: 0.1rem solid ${({ theme }) => theme.nord.white0};
  border-radius: 0.5rem;
  font-size: 12px;
  font-family: Unbounded,serif;
  @media (max-width: 768px) {
      font-size: 0.5rem;
      text-align: center;
      width: 100%;
    }
`;

export const DateFieldContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const DateLabel = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.nord.white2};
  max-width: 60vw;
  font-size: 15px;
  @media (max-width: 768px) {
      font-size: 0.8rem;
    }

`;

export const InputDate = styled.input`
  display: flex;
  flex-direction: row;
  padding: 8px;
  justify-content: center;
  background-color: ${({ theme }) => theme.nord.white2};
  border: 0.1rem solid ${({ theme }) => theme.nord.white0};
  border-radius: 0.5rem;
  font-size: 10px;
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
  width: 50%;
  padding: 0.5em;
  border-radius: 0.5em;
  background-color: ${({ theme }) => theme.nord.white0};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.nord.green};
  }
  transition: background-color 0.2s;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    width: 50%;
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
  width: 70%;
  padding: 1em;
  margin-bottom: 1em;
  text-align: justify;
  transition: all 0.7s ease-in-out;
  font-size: 12px;
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
    text-align: center;
  }
`;
