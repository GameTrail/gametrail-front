import styled from 'styled-components';

export const DataContainer = styled.div`
display: flex;
flex-direction: column;
width: 70%;
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
  line-height: 1.2;
  text-align: justify;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
    text-align: center;
  };
`;
