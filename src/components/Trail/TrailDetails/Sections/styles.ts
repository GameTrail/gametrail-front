import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  width: 11em;
  height: 3em;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  border-radius: 1.2em;
  border: 0;
  background-color: ${({ theme }) => (theme.nord.gray3)};
  color: ${({ theme }) => theme.nord.white0};
  font-weight: 500;
  font-size: 1.2em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.nord.white0};
    background-color: ${({ theme }) => theme.nord.purple};
  }
  &:active {
    background-color: ${({ theme }) => theme.nord.gray3};
  }
`;

export const Container = styled.div`
  width: 100%;
  padding-top: 10%;
  gap: 0.9%;
  height: 90%;
  display: flex;
  padding-bottom: 4%;
  align-content: center;
  align-items: center;
  align-self: center;
`;

export const SectionContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    `;
