import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Container = styled.div` 

width: 100%;
heigth: auto;
background-color: ${({ theme }) => theme.nord.white0};
ul{
    list-style: none;
  }   
`;

export const Buscador = styled.div` 

width: 80%;
heigth: auto;
margin-left: 10%;
    
`;

export const Cuerpo = styled.div` 

background-color: ${({ theme }) => theme.nord.white0};

padding: 20px;
display: flex;
flex-direction: row;
width: 80%;
margin: 0 auto;
flex-flow: row wrap;
justify-content: space-between;


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

background-color: ${({ theme }) => theme.nord.gray0};


color: white;
font-weight: lighter;
align-items: flex-end;
width: 120px;
text-align: center;
margin: 5px;
flex-grow: 0.5;
flex-basis: 20%;

border-radius: 20px;

&:hover {
    transform: scale(1.1);
    transition: all 300ms;
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
margin-left: 35%;
padding: 10px;
font-size: 20px;

@media (max-width: 1068px) {
    width: 290px;
}

@media (max-width: 767px) {
    width: 220px;
    margin-left: 25%;
}
@media (max-width: 567px) {
    width: 220px;
    margin-left: 16%;
}



`;

export const P = styled.p`


margin: 15px;
padding: 20px;
background-color: ${({ theme }) => theme.nord.gray3};
font-size: 17px;
border-radius: 7px;
bottom: 0;
text-align: center;
&:hover {
    background-color: ${({ theme }) => theme.nord.gray1};
    color: ${({ theme }) => theme.nord.white1};
    border: 2px solid ${({ theme }) => theme.nord.white1};
    transition: all 300ms;
}

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

border-radius: 15px;
width: 220px;
height: 60px;
cursor: pointer;
margin-bottom: 20px;
background-color: ${({ theme }) => theme.nord.white2};
font-size: 25px;
padding: 9px;

&:hover {
    background-color: ${({ theme }) => theme.nord.gray2};
    color: ${({ theme }) => theme.nord.white1};
    transition: all 300ms;
    
}
`;

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
    
  .previous,
  .next {
    display: inline-block;
    padding: 10px;
    margin: 10px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.nord.gray2};
    color: ${({ theme }) => theme.nord.white2};
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.nord.white1};
    }

    
  }
  @media (min-width: 567px) {
    
    li{
    display: inline-block;
    padding: 10px;
    margin: 15px;
    border-radius: 4px;
    background-color: #eee;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  a{
    padding: 18px;
  }
  

  .pagination__link {
    display: inline-block;
    padding: 10px;
    margin: 0 25px;
    border-radius: 4px;
    color: ${({ theme }) => theme.nord.white2};
    background-color: ${({ theme }) => theme.nord.gray2};
    cursor: pointer;
    transition: background-color 0.3s ease;
    

    &--active {
        background-color: ${({ theme }) => theme.nord.orange};
        color: ${({ theme }) => theme.nord.white2};
    }

    &--disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    &:hover {
      background-color: ${({ theme }) => theme.nord.white1};
        color: ${({ theme }) => theme.nord.gray2};
    }
  }
}
@media (max-width: 567px) {
  .previous,
  .next {
    display: inline-block;
    padding: 10px;
    margin: 10px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.nord.gray2};
    color: ${({ theme }) => theme.nord.white2};
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 10px;

    &:hover {
      background-color: ${({ theme }) => theme.nord.white1};
    }

    
  }
    
    li{
    display: none;
    padding: 10px;
    margin: 15px;
    border-radius: 4px;
    background-color: #eee;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  a{
    padding: 18px;
    display: none;

  }
  

  .pagination__link {
    display: none;

    display: inline-block;
    padding: 10px;
    margin: 0 25px;
    border-radius: 4px;
    color: ${({ theme }) => theme.nord.white2};
    background-color: ${({ theme }) => theme.nord.gray2};
    cursor: pointer;
    transition: background-color 0.3s ease;
    

    &--active {
        background-color: ${({ theme }) => theme.nord.orange};
        color: ${({ theme }) => theme.nord.white2};
    }

    &--disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    &:hover {
      background-color: ${({ theme }) => theme.nord.white1};
        color: ${({ theme }) => theme.nord.gray2};
    }
  }
}
  

  
  

  
`;
