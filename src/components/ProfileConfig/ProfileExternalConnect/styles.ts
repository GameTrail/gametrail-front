import styled from 'styled-components';

export const ExternalConnectContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    margin-top:2rem;
    @media (max-width: 768px) {
        gap: 1rem;
    };


`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:2rem;
    margin-bottom:2rem;

    @media (max-width: 768px) {
        flex-direction: column;
    };
`;

export const ExternalConnectImage = styled.img`
  width: 200px;
  height: 200px;
  position: relative;
  aspect-ratio: 4.20891364902507 / 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0px 0px 0px 0px;

    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
    };

`;

export const ExternalConnectButton = styled.button`
    height: 60px;
    width: 200px;
    border-radius: 9px;
    padding: 0 10px;
    font-size: 1.4rem;
    margin: 0 auto;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => (theme.nord.white2)};
    background: ${({ theme }) => (theme.nord.green)};
    @media (max-width: 768px) {
        font-size: 0.8rem;
        height:30px;
        width: 100px;
    }

    &:hover {
        box-shadow: 0 0 3px ${({ theme }) => theme.nord.gray2};
        background-color: ${({ theme }) => (theme.nord.white2)};
        color: ${({ theme }) => (theme.nord.green)};
    }
`;
