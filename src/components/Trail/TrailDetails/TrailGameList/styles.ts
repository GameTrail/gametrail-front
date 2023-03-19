import styled from 'styled-components';
import Image from 'next/image';
import { handleStateColor } from './logic';
import type { StateProps } from './types';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    gap: 1em;
    width: 520px;
    margin-bottom: 25px;


    @media (max-width: 768px) {
        width: 90vw;
        flex-wrap: wrap;
    }    
`;
export const Game = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
    border-radius: 9px;
    width: 100%;
    height: auto;
    cursor: pointer;
    background-color: ${({ theme }) => theme.nord.gray3};

    box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
    transition: all 0.3s ease-in-out;
    
    &:hover {
        box-shadow: 0 0 10px 0;
        background-color: ${({ theme }) => theme.nord.gray2};
    }
`;

export const Name = styled.p`
    font-size: 1em;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.white2};
    margin-bottom: 0.5em;
`;

export const LastModified = styled.p`
    font-size: 0.8em;
    color: ${({ theme }) => theme.nord.white2};
    margin-bottom: 1em;
`;

export const State = styled.p<StateProps>`
    font-size: 0.8em;
    color: ${({ theme }) => theme.nord.white0};

    text-align: center;
    padding: 6px;

    border-radius: 9px;
    background-color: ${({ theme, state }) => () => handleStateColor(theme, state)};
`;

export const GameImage = styled(Image)`
    border-radius: 9px;
    height: auto;
`;
