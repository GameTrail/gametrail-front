import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: auto;
  margin: 5%;
  padding-top: 5%;
`;

export const ListsDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 20px;

    @media (max-width: 768px) {
        padding: 0%;
    };
`;
