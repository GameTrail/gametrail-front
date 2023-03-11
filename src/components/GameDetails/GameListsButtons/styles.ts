import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 2em;
  margin-bottom: 2.5%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.nord.white0};
    border-radius: 8px;
    margin-top: 1rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    width: 20%;
    gap: 0.5rem;
    button {
        font-size: 1.2rem;
        font-weight: 400;
        cursor: pointer;
        padding: 10px 20px;
        color: ${({ theme }) => theme.nord.white0};
        border-radius: 8px;
        border: none;
        background-color: ${({ theme }) => theme.nord.gray3};
        &:hover {
            transition: all 0.3s ease-in-out;
            box-shadow: 0 0 10px 0;
            background-color: ${({ theme }) => theme.nord.gray1};
        }
        &:active {
            background-color: ${({ theme }) => theme.nord.gray1};
        }
        
    }
    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 80%;
        height: 100%;
        padding-top: 0.5rem;
        button {
            font-size: 1rem;
            font-weight: 400;
            padding: 10px 20px;
            border-radius: 8px;
        }
          
        
};
`;
