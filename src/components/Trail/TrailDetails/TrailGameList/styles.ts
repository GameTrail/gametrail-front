import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { handleStateColor } from './logic';
import type { StateProps } from './types';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    gap: 1em;
    width: 100%;
    margin-bottom: 25px;


    @media (max-width: 768px) {
        width: 95%;
        flex-wrap: wrap;
    }    
`;
export const Game = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1em;
    border-radius: 9px;
    width: 100%;
    height: auto;
    cursor: pointer;
    background-color: ${({ theme }) => theme.nord.gray3};
    background-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5));
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
    transition: all 0.3s ease-in-out;

    @media (max-width: 768px) {
        padding: 1em;
        justify-content: center;
        flex-wrap: wrap;
    } 
    &:hover {
        box-shadow: 0 0 10px 0;
        background-color: ${({ theme }) => theme.nord.gray1};
        background-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5));
        transition: all 0.3s ease-in-out;
    }
`;

export const Name = styled.p`
    font-size: 1.6em;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.white2};
    margin-bottom: 0.5em;
`;

export const LastModified = styled.p`
    font-size: 1em;
    color: ${({ theme }) => theme.nord.blue1};
    margin-bottom: 1em;
`;

export const State = styled.p<StateProps>`
    font-size: 1em;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.white0};

    text-align: center;
    line-height: 40px;
    height: 40px;

    border-radius: 9px;
    background-color: ${({ theme, state }) => () => handleStateColor(theme, state)};
`;

export const GameImage = styled(Image)`
    border-radius: 9px;
    width: 100%;
`;
