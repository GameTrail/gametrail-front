import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    width: 100%;
    @media (max-width: 768px) {
        width: 94vw;
        flex-wrap: nowrap;
    }
`;
export const Player = styled.div`
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

export const UserName = styled.p`
    font-size: 1em;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.white2};
    margin-bottom: 0.5em;
`;

export const ProfilePicture = styled(Image)`
    border-radius: 9px;
    height: auto;
`;
