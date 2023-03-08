import styled from 'styled-components';

export const Title = styled.h1`
  flex-shrink: 0;
  width: auto; /* 724px */
  height: auto; /* 68px */
  white-space: pre;
  overflow: visible;
  z-index: 0;
  position: relative;
  color: #ffffff;
  line-height: 1.2;
  text-align: left;
`;

export const Container = styled.div` 
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 3%;
  padding-bottom: 3%;
  background: linear-gradient(180deg, #2e3440 0%, #4c566a 100%);
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 40;
`;

export const ContainerAux = styled.div` 
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 3%;
  padding-bottom: 6%;
  padding-inline-end: 10%;
  padding-inline-start: 10%;
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 40;
`;
