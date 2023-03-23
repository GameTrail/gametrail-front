import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    padding: 0 135px;

    background-color: ${({ theme }) => theme.nord.gray1};
    color: ${({ theme }) => theme.nord.white0};
    box-shadow: 0 0 10px ${({ theme }) => theme.nord.gray2};

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MenuItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    cursor: pointer;
`;

export const User = styled.div`
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

export const Username = styled.p`
    font-size: 1em;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.white2};
    margin-bottom: 0.5em;
`;

export const UserImage = styled(Image)`
    border-radius: 9px;
    height: auto;
`;
