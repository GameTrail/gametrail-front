import styled from 'styled-components';

export const GangContainer = styled.div`
float: left;
width: 60%;
height: auto;
padding: 2% 2% 2% 2%;
margin-top: 0%;
border-width: 5px;
border-style: solid;
background-color: ${({ theme }) => theme.nord.gray0};
border-radius: 12px;
border-color: ${({ theme }) => theme.nord.gray1};
`;

export const AuxContainer = styled.div`
float: left;
display: flex;
flex-direction: row;
width: 100%;
height: auto;
justify-items: center;
background-color: ${({ theme }) => theme.nord.gray0};
border-radius: 12px;
`;

export const DataContainer = styled.div`
flex-direction: row;
text-align: center;
width: 50%;
height: auto;
padding: 2% 2% 2% 2%;
margin: 2%;
background-color: ${({ theme }) => theme.nord.gray2};
border-radius: 10px;
`;

export const UsersContainer = styled.div`
float: left;
display: flex;
flex-direction: row;
justify-content: center;
text-align: center;
width: 50%;
height: auto;
padding: 1% 1% 1% 1%;
margin-top: 2%;
border-width: 5px;
border-style: solid;
background-color: ${({ theme }) => theme.nord.white0};
border-radius: 50px;
border-color: ${({ theme }) => theme.nord.gray1};
`;

export const DataText = styled.h3`
color: ${({ theme }) => theme.nord.white2};
`;

export const Title = styled.h2`
  flex-shrink: 0;
  width: auto; /* 724px */
  height: auto; /* 68px */
  white-space: pre;
  overflow: visible;
  z-index: 0;
  position: relative;
  color: #ffffff;
  line-height: 1.2;
  text-align: center;
`;

export const ImgContainer = styled.div`
display: flex;
flex-direction: row;
text-align: center;
width: auto;
height: auto;
img{
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 30px;
        float: left;
        box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3}; 
    }
`;

export const PlayerData = styled.h3`
justify-items: center;
text-align: center;
padding: 3% 5% 3% 5%;
`;
