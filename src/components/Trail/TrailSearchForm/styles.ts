import styled from 'styled-components';
import type { StylesConfig } from 'react-select';
import type { Game } from '@/models/Game/types';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 27%;
    height: 100%;
    // mobile
    @media (max-width: 768px) {
        width: 80vw;
        align-items: center;
    }
`;

export const CrownContainer = styled.div`
width: 100%;
height: 20px;
display: flex;
flex-direction: row;
align-items: center;
.crown{
    height: 30px;
    width: height;
    margin-left: 1em;
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
@media (max-width: 768px) {
  width: 80vw;
}
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.nord.gray1};
    // mobile
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
`;

export const Label = styled.label`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.gray1};
    margin-top: 1em;
    // mobile
    @media (max-width: 768px) {
      font-size: 1rem;
    }
`;

export const GamesSelectorStyles: StylesConfig<Game> = {
  container: (styles) => ({
    ...styles,
    width: '100%',
    color: '#2E3440',
    fontSize: '1em',
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: '#ECEFF4',
    overflowY: 'scroll',
    maxHeight: '100px',
  }),
};

export const Input = styled.input`
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    border: 1px solid ${({ theme }) => theme.nord.gray0};
    border-radius: 15px;
    font-size: 1rem;
    font-family: Unbounded,serif;
    &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.nord.gray1};
    }
`;

export const PlatformSelect = styled.select`
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    border: 1px solid ${({ theme }) => theme.nord.gray0};
    border-radius: 15px;
    font-size: 1rem;
    font-family: Unbounded,serif;
    &:focus {
        outline: none;
    }
`;

export const PlatformOption = styled.option`
    font-size: 1rem;
    font-family: Unbounded,serif;
    color: ${({ theme }) => theme.nord.gray1};
`;

export const SearchButton = styled.button`
    width: 100%;
    height: 45px;
    margin-top: 1em;
    border: none;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.nord.gray1};
    color: ${({ theme }) => theme.nord.white0};
    font-size: 1rem;
    font-family: Unbounded,serif;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.nord.gray2};
    }
    // mobile
    @media (max-width: 768px) {
      width: 80vw;
      font-size: 1.2rem;
    }
`;

export const ResetButton = styled.button`
    width: 100%;
    height: 45px;
    margin-top: 1em;
    border: 2px;
    border-radius: 25px;
    border-style: solid;
    background-color: ${({ theme }) => theme.nord.white2};
    color: ${({ theme }) => theme.nord.gray1};
    border-color: ${({ theme }) => theme.nord.gray0};
    font-size: 1rem;
    font-family: Unbounded,serif;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.nord.white0};
    }
    // mobile
    @media (max-width: 768px) {
      width: 80vw;
      font-size: 1.2rem;
    }
`;
