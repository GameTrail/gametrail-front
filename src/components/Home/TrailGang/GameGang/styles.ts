import styled from 'styled-components';
import Link from 'next/link';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  #foodcheck {
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 2px;
    border-radius: 2em;
    margin-bottom: 1em;
    margin-left: 1em;
  }
  width: 50vw;
  height: auto;
  padding: 1%;
  @media (max-width: 768px) {       
      width: 100vw;         
      height: 100%;
      justify-content: center;
      padding: 1%;    
      #foodcheck {
        justify-content: center;
        width: 100px;
        height: 100px;
        border: 2px;
        border-radius: 2em;
        margin-bottom: 1em;
        margin-left: 0em;
      } 
  };
`;

export const Sponsor = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1em;
  @media (max-width: 768px) {  
      display: flex;
      flex-direction: column;
      width: 100vw;         
      height: 100%;
      justify-content: center;
      padding: 1%;     
  };
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.nord.white1};
  line-height: 1.2;
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2.5%;
  @media (max-width: 768px) {
    font-size: 1.7rem;
  };
`;

export const GameGangContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
      display: flex;
      flex-direction: column;   
      justify-content: center;
      width: 100%;
  };
`;

export const CrewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  @media (max-width: 768px) {
      flex-direction: column;         
      width: 100%;         
      height: 100%;
      justify-content: center;
      align-items: center;
      padding-top: 1%;     
  };
`;

export const AuxContainer = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  width: 10vw;
  height: 40vh;
  @media (max-width: 768px) {
      flex-direction: column;         
      width: 100%;         
      height: 50vh;
      justify-content: center;
      align-items: center;
  };
`;
