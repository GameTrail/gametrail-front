import styled from 'styled-components';

export const TitlesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-evenly;
    @media (max-width: 300px) {
        width: 0;
        height: 0;
    }
`;

export const Container = styled.div` 
  width: 100%;
  height: auto;
  padding-top: 2.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.nord.white2};
  ul{
      list-style: none;
    }   
`;
export const Buscador = styled.div` 
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;
export const Cuerpo = styled.div` 
  padding: 20px;
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 0 auto;
  flex-flow: row wrap;
  justify-content: space-between;
  justify-content: center;
h3{
    color: ${({ theme }) => theme.nord.gray0};
}
@media (max-width: 750px) {
    justify-content: space-evenly;
    width: 100%;
}
@media (max-width: 550px) {
    justify-content: space-evenly;
    width: 100%;
}
`;

export const Cajas = styled.section` 
max-width: 380px;
background-color: ${({ theme }) => theme.nord.gray0};
box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
transition: all 0.3s ease-in-out;
color: white;
font-weight: lighter;
align-items: flex-end;
width: 120px;
text-align: center;
margin: 5px;
flex-grow: 0.5;
flex-basis: 20%;
cursor: pointer;
border-radius: 15px;
&:hover {
    transform: scale(1.1);
    transition: all 300ms;
}
@media (min-width: 1440px) {
    min-width: 360px;
}
@media (max-width: 1250px) {
    flex-basis:40%;
}
@media (max-width: 768px) {
    flex-basis:50%;
    
}
`;
export const Mascara = styled.div`
width: 100%;
height: 500px;
overflow: hidden;
margin-bottom: 20px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
img{
    width: 100%;
    height: 100%;
}
@media (max-width: 668px) {
    height: 350px;
    
}
@media (max-width: 568px) {
    height: 250px;
    
}
`;
export const Titulo = styled.h1`
margin-bottom: 10px;
color: ${({ theme }) => theme.nord.gray1};
font-size: 55px;
@media (max-width: 588px) {
    font-size: 25px;
}
`;
export const Titulo2 = styled.h2`
margin-bottom: 10px;
color: ${({ theme }) => theme.nord.gray1};
font-size: 32px;
@media (max-width: 588px) {
    font-size: 21px;
}
`;
export const Titulo3 = styled.h3`
margin-bottom: 10px;
color: ${({ theme }) => theme.nord.white2};
font-size: 24px;
@media (max-width: 588px) {
    font-size: 20px;
}
`;
export const Input = styled.input`
width: 30%;
height: 40px;
border-radius: 10px;
border: 3px solid ${({ theme }) => theme.nord.gray0};
margin-top: 50px;
margin-bottom: 20px;
padding: 10px;
font-size: 20px;
@media (max-width: 1068px) {
    width: 290px;
}
@media (max-width: 768px) {
    width: 220px;
}
@media (max-width: 567px) {
    width: 220px;
}
`;
export const Button = styled.p`
margin: 15px;
padding: 20px;
background-color: ${({ theme }) => theme.nord.gray3};
font-size: 17px;
border-radius: 7px;
bottom: 0;
cursor: pointer;
text-align: center;
&:hover {
  background-color: ${({ theme }) => theme.nord.white0};
    color: ${({ theme }) => theme.nord.gray3};
     transition: all 0.3s ease-in-out;
        box-shadow: 0 0 10px 0;
}
`;
export const ButtonGameInList = styled.p`
margin: 15px;
padding: 20px;
background-color: ${({ theme }) => theme.nord.gray3};
font-size: 17px;
border-radius: 7px;
bottom: 0;
text-align: center;
`;
export const Cuerpo2 = styled.div` 
display: flex;
flex-direction: column;
margin-top: 15px;
width: 80%;
margin-left: 10%;
`;
export const Columna = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: left;
  
`;
export const Row = styled.tr`
  background-color: ${({ theme }) => theme.nord.gray3};
  &:hover {
    background-color: ${({ theme }) => theme.nord.gray2};
}
`;
export const Fila = styled.td`
text-align: center;
color: ${({ theme }) => theme.nord.white0};
padding: 20px;
img{
    border-radius: 8px;
}
@media (max-width: 567px) {
    padding: 10px;
}
`;
export const CabezaTabla = styled.thead`
color: ${({ theme }) => theme.nord.white1};
font-size: 32px;
background-color: ${({ theme }) => theme.nord.gray0};
@media (max-width: 567px) {
    font-size: 17px;
}
`;
export const Tabla = styled.table`
color: ${({ theme }) => theme.nord.gray0};
border-collapse: collapse;
border-radius: 15px;
margin-bottom: 15px;
@media (max-width: 567px) {
    width: 100px;
    font-size: 10px;
    margin-left: -20px;
  
}
`;
export const Boton = styled.button`
border-radius: 10px;
width: 220px;
height: 60px;
cursor: pointer;
margin-bottom: 20px;
background-color: ${({ theme }) => theme.nord.white0};
font-size: 25px;
padding: 9px;
&:hover {
    background-color: ${({ theme }) => theme.nord.gray2};
    color: ${({ theme }) => theme.nord.white1};
    transition: all 300ms;
    
}
`;

export const GameName = styled.p`
margin-top: 0%;
margin: 5%;
font-size: 25px;
@media (max-width: 567px) {
    font-size: 20px;
  
}
`;
