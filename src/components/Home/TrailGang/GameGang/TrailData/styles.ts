import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 30%;
    margin-bottom: 5em;
    margin-left: 1em;
    cursor: pointer;
    background-color: ${({ theme }) => theme.nord.gray3};
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0 0 10px 0;
        background-color: ${({ theme }) => theme.nord.gray2};
    }
    svg {
        max-height: 20vh;
        max-width: 20vw;
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 1em;
    }
`;

export const Data = styled.p`
    font-size: 1em;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.white2};
`;
