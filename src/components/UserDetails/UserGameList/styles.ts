import styled from 'styled-components';
import Link from 'next/link';
import { handleStateColor } from './logic';
import type { StateProps } from './types';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    gap: 1em;
    width: 1720px;
    margin-bottom: 25px;


    @media (max-width: 768px) {
        width: 90vw;
        flex-wrap: wrap;
    }    
`;

export const GameListEmpty = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: 1.2em;
    font-weight: 600;
    
    @media (max-width: 768px) {
        font-size: 0.8em;
        font-weight: 600;
        width: 75vw;
        height: 50vh;
    }

`;

export const Game = styled(Link)`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1em;
    border-radius: 9px;
    width: 55vw;
    height: auto;
    cursor: pointer;
    background-color: ${({ theme }) => theme.nord.gray3};

    box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
    transition: all 0.3s ease-in-out;
    
    &:hover {
        box-shadow: 0 0 10px 0;
        background-color: ${({ theme }) => theme.nord.gray2};
    }

    @media (max-width: 1024px) {
        width: 75vw;
    }

    @media (max-width: 768px) {
        width: 80vw;
    }

    @media (max-width: 426px) {
        flex-direction: column;
    }
`;

export const GameData = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 6%;
    gap: 0.8em;

    @media (max-width: 1024px) {
        margin-left: 3%;
    }

    @media (max-width: 767px) {
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-left: 0%;
        gap: 1.2em;
    }
`;
export const GameInfo = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: flex-start;
    gap: 6em;

    @media (max-width: 1023px) {
        gap: 3em;
    }

    @media (max-width: 767px) {
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 0.8em;
        margin-bottom: 5%;
    }
`;

export const Name = styled.p`
    font-size: 1em;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.white2};
    margin-bottom: 0.5em;
`;

export const LastModified = styled.div`
    font-size: 0.8em;
    color: ${({ theme }) => theme.nord.white2};
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 0.6em;
`;

export const Added = styled.div`
    font-size: 0.8em;
    color: ${({ theme }) => theme.nord.white2};
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 0.6em;
`;

export const State = styled.p<StateProps>`
    width: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 0.8em;
    color: ${({ theme }) => theme.nord.white0};

    text-align: center;
    padding: 6px;

    border-radius: 9px;
    background-color: ${({ theme, state }) => () => handleStateColor(theme, state)};

    @media (max-width: 768px) {
        width: 100px;
    }

    @media (max-width: 767px) {
        width: 200px;
    }
    
`;

export const GameImage = styled.img`
    border-radius: 9px;
    height: auto;

    @media (max-width: 374px) {
        width: 255px;
    }
    
    @media (min-width: 374px) {
        width: 300px;
    }

    @media (min-width: 424px) {
        width: 340px;
    }

    @media (min-width: 768px) {
        width: 120px;
    }
`;
