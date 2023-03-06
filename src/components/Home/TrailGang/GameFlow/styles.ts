import styled from 'styled-components';

export const GameFlow = styled.div`
float: right;
width: 50%;
height: 35%;
padding: 2% 2% 2% 2%;
margin-top: 2%;
border-width: 5px;
border-style: solid;
background-color: ${({ theme }) => theme.nord.white0};
border-radius: 12px;
border-color: ${({ theme }) => theme.nord.gray1};
`;

export const DataText = styled.h3`
color: ${({ theme }) => theme.nord.gray1};
`;
