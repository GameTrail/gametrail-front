import styled from 'styled-components';
import { motion } from 'framer-motion';
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

    @media (max-width: 767px) {
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

export const MotionGame = motion(Game);
export const MotionGameVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.white2};
    margin-bottom: 0.5em;
    text-align: center;
    width: 250px;
    @media (min-width: 768px) {
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis; 
    }
`;

export const LastModified = styled.p`
    font-size: 1em;
    color: ${({ theme }) => theme.nord.blue1};
    margin-bottom: 1em;
`;

export const State = styled.button<StateProps>`
    border: none;
    font-size: 1em;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.white0};
    width: 100px;
    text-align: center;
    line-height: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 9px;
    background-color: ${({ theme, state }) => () => handleStateColor(theme, state)};
    @media (max-width: 767px) {
        width: 200px;
    }
    @media (min-width: 769px) {
        width: 200px;
    }
`;

export const GameImage = styled.img`
    border-radius: 9px;
    width:auto;
    @media (max-width: 767px) {
        width: 100%;
        height: auto;
    }
    
`;

export const GameInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 2.5%;
@media (max-width: 767px) {
    gap: 0.5em;
    flex-direction: column;
    align-items: center;
}
`;
