import styled from 'styled-components';
import Link from 'next/link';

export const Foot = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 140px;
    padding: 0 135px;

    background-color: ${({ theme }) => theme.nord.gray1};
    color: ${({ theme }) => theme.nord.white0};
    box-shadow: 0 0 10px ${({ theme }) => theme.nord.gray2};

    @media (max-width: 768px) {
        padding: 20px 20px;
        flex-direction: column;
    }
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.4rem;
    width: 70%;
    height: 100%;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`;

export const MenuItem = styled(Link)``;
