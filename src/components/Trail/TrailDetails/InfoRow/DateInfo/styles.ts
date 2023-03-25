import styled from 'styled-components';

export const DateDiv = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.nord.blue3};
  color: ${({ theme }) => theme.nord.white0};
  border-radius: 9px;
  `;

export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
    font-style: italic;
    font-weight: 600;
    font-size: 1.2rem;
    width: 100%;
    `;

export const DateBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    gap: 10px;
`;
