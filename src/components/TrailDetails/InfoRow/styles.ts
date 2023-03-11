import styled from 'styled-components';

export const InfoRow = styled.div`
    display: flex;
  width: 100%;
  gap: 25%;
    padding-top: 1.5rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
  //flex changes to column on mobile
    @media (max-width: 892px) {
        flex-direction: column;
      
    }
    `;

export const JoinButton = styled.div`
  box-sizing: border-box;
  width: 165px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  border-radius: 10px;
    background-color: ${({ theme }) => theme.nord.green};
    color: ${({ theme }) => theme.nord.gray0};
    font-weight: 500;
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.nord.white0};
        background-color: ${({ theme }) => theme.nord.gray3};
    }
    &:active {
        background-color: ${({ theme }) => theme.nord.blue0};
    }
`;

export const JoinContainer = styled.div`
    display: flex;
  gap: 15%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
  padding-top: 1rem;
    `;

export const JoinPlayersCount = styled.div`
    display: flex;
  gap: 15%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    font-weight: 500;
  font-size: 2rem;
    `;
