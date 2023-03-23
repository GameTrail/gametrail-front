import styled from 'styled-components';

export const PlayerListElement = styled.li`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
  padding: 2% 1% 2% 5%;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    font-size: 1.5em;
    `;

export const PlayerListContainer = styled.ul`
    width: 100%;
    height: 100%;
  background-color: ${({ theme }) => theme.nord.gray3};
  border-radius: 1.5rem;
  color: ${({ theme }) => theme.nord.white0};
    `;

export const PlayerListHeader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    font-size: 80%;
    padding: 4% 6% 1% 12%;
  
  @media (max-width: 892px) {
    font-size: 60%;
  }
    `;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ProfilePicture = styled.img`
    width: 3em;
    height: 3em;
    border-radius: 50%;
    margin-right: 1rem;
   @media (max-width: 892px) {
    width: 2em;
    height: 2em;
   }
`;

export const PlayerName = styled.span`
    font-size: 0.9em;
    font-weight: 400;
  width: 100%;
    display: flex;
    align-items:  flex-start;
    justify-content: flex-start;
  @media (max-width: 892px) {
    width: 70%;
    font-size: 0.7em;
  }
`;

export const PlayerValue = styled.span`
    font-size: 1.5rem;
    font-weight: 400;
  width: 20%;
    display: flex;
    flex-direction: row;
  @media (max-width: 892px) {
    font-size: 1rem;
  }
    `;
