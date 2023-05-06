import styled from 'styled-components';
import Link from 'next/link';

export const Social = styled(Link)`
margin-left: 2em;
margin-right: 2em;
width: 150px;
height: width;
@media (max-width: 768px) {
        margin-left: 1em;
        margin-right: 1em;
        width: 70px;
        height: width;
    }
`;

export const Container = styled.div`
color: ${({ theme }) => theme.nord.white0};
font-size: medium;
display: flex;
flex-direction: row;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
    }
`;
