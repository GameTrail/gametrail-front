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
box-sizing: border-box;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 3%;
  padding-bottom: 6%;
  background: linear-gradient(360deg, #2e3440 0%, #4c566a 100%);
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 40;
`;
