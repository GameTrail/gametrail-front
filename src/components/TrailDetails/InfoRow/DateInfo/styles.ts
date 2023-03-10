import styled from 'styled-components';

export const DateDiv = styled.div`
  flex-shrink: 0;
  width: 162px;
  height: 55px;
  display: flex;
  align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.nord.blue3};
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  `;

export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    flex-wrap: nowrap;
    padding-right: 2rem;
  font-style: italic;
    font-weight: 500;
font-size: 1.3rem;
    `;

export const DateBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    `;
