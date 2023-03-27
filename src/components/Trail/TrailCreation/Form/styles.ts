import styled from 'styled-components';
import type { StylesConfig } from 'react-select';
import type { Game } from '@/models/Game/types';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    flex-wrap: nowrap;
    width: 100%;
    height: fit-content;
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    @media (max-width: 490px) {
      width: 100%;
      height: 100%;
    }
      svg{
        margin: 0 auto;
        transform: scale(2);
        margin-bottom: 1rem;
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
    width: 100%;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
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
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  background-color: ${({ theme }) => theme.nord.white2};
  border: 0.1rem solid ${({ theme }) => theme.nord.white0};
  border-radius: 0.5rem;
  font-size: 1.2rem;

    `;

export const InputDate = styled.input`
    width: 90%;
    height: 2rem;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.nord.white2};
  border: 0.1rem solid ${({ theme }) => theme.nord.white0};
  border-radius: 0.5rem;
    `;

export const InputTextArea = styled.textarea`
    width: 100%;
    height: 10rem;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  background-color: ${({ theme }) => theme.nord.white2};
  border: 0.1rem solid ${({ theme }) => theme.nord.white0};
  border-radius: 0.5rem;
  font-size: 1.2rem;
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

export const ButtonRow = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    `;

export const Button = styled.button`
    width: 100%;
    height: 3em;
    border: 0.1em solid ${({ theme }) => theme.nord.white0};
    border-radius: 0.5em;
    background-color: ${({ theme }) => theme.nord.blue2};
    color: ${({ theme }) => theme.nord.gray0};
    cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.nord.green};
  }
  transition: background-color 0.2s;
  font-size: 1.7rem;
`;

export const SelectorStyles: StylesConfig<Game> = {
  container: (styles) => ({
    ...styles,
    width: '100%',
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: '#ECEFF4',
  }),
};
