import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DeletePopup = styled.div`
  position: fixed;
  top: 25%; 
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding: 20px;
  color: ${({ theme }) => theme.nord.white0};
  background-color: ${({ theme }) => theme.nord.red};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 #a05454;
    }
    50% {
      box-shadow: 0 0 0 5px #a05454;
    }
    100% {
      box-shadow: 0 0 0 0 #a05454;
    }
  }
  animation: pulse 1.5s ease-in-out infinite;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    position: fixed;
    margin-top: 2rem;
    z-index: 1;
    font-size: 0.8rem;
    justify-content: center;
  };
`;

export const WarningIcon = styled(FontAwesomeIcon)`
  width: 50%;
  margin-bottom: 50px; 
  
  @media (max-width: 768px) {
    width: 100px;
    margin-bottom: 0;
  }
`;

export const DeleteHeader = styled.h1`
    font-size: 1.2rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 0.8rem;
    };

`;

export const DeleteContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
`;

export const DeleteButton = styled.button`
    height: 60px;
    width: 200px;
    border-radius: 9px;
    padding: 0 10px;
    font-size: 1.4rem;
    margin-top: 1em;
    margin-bottom: 2em;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => (theme.nord.white2)};
    background: ${({ theme }) => (theme.nord.red)};
    @media (max-width: 768px) {
        font-size: 0.8rem;
        height:30px;
    }

    &:hover {
        box-shadow: 0 0 3px ${({ theme }) => theme.nord.gray2};
        background-color: ${({ theme }) => (theme.nord.white2)};
        color: ${({ theme }) => (theme.nord.red)};
    }
`;

export const DeleteConfirmButton = styled.button`
        padding: 0.5rem;
        outline: none;
        border: none;
        border-radius: 9px;
        background-color: ${({ theme }) => theme.nord.white0};
        cursor: pointer;
        display: flex;
        color: ${({ theme }) => theme.nord.red};
        margin-top: 1rem;
        justify-content: center;
        width: 200px;
        transition: all 0.2s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
        font-weight: 600;
        font-style: normal;
        font-size: 16px;
        letter-spacing: 0;
        line-height: 1.2;
        text-align: center;
         &:hover {
            background-color: ${({ theme }) => theme.nord.white0};
            color: ${({ theme }) => theme.nord.gray0};
    }
`;

export const DeleteCancelButton = styled.button`
        padding: 0.5rem;
        outline: none;
        border: none;
        border-radius: 9px;
        background-color: ${({ theme }) => theme.nord.green};
        cursor: pointer;
        display: flex;
        width: 200px;
        color: ${({ theme }) => theme.nord.gray3};
        margin-top: 1rem;
        justify-content: center;
        box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
        transition: all 0.2s ease-in-out;
        font-style: bold;
        font-weight: 600;
        font-size: 16px;
        letter-spacing: 0;
        line-height: 1.2;
        text-align: center;
         &:hover {
            background-color: ${({ theme }) => theme.nord.white0};
            color: ${({ theme }) => theme.nord.gray0};
    }
`;
