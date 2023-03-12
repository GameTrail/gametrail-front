import styled from 'styled-components';
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
