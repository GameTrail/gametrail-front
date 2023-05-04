import styled from 'styled-components';
import Link from 'next/link';

export const Social = styled(Link)`
margin-left: 2em;
margin-right: 2em;
width: 150px;
height: width;
`;

export const Container = styled.div`
color: ${({ theme }) => theme.nord.white0};
font-size: medium;
display: flex;
flex-direction: row;
`;
