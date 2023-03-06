import styled from 'styled-components';

export type ContainerProps = {
  darkMode: boolean;
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
    padding: 0 20px;

    background-color: ${({ darkMode, theme }) => (darkMode ? theme.nord.gray0 : theme.nord.white2)};

    h2 {
        color: ${({ darkMode, theme }) => (darkMode ? theme.nord.white0 : theme.nord.gray1)};
        margin-bottom: 1rem;
    }
`;

export const InfoDetails = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: ${({ darkMode, theme }) => (darkMode ? theme.nord.white0 : theme.nord.gray1)};
    margin-top:10px;
    width: 50%;
    height: 100%;
    padding: 0 20px;
`;

export const StatsDetails = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.nord.gray3};
    color: ${({ theme }) => theme.nord.white0};
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
    border-radius: 10px;
    width: 30%;
    height: 100%;
    padding: 0 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding-top: 10px;
    };
    
    
`;

export const ListsDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 20px;
`;
