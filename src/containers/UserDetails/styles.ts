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
    height: auto;
    padding: 0 20px;

    // background-color: ${({ darkMode, theme }) => (darkMode ? theme.nord.gray0 : '#fff')};

        color: ${({ darkMode, theme }) => (darkMode ? theme.nord.white0 : theme.nord.gray1)};
        margin-bottom: 1rem;
    }

    @media(max-width: 768px) {
        height: auto;
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
    width: 520px;
    height: 100%;
    padding: 0 20px;
    @media (max-width: 1030px) {
        flex-direction: column;
        width: 330px;
        height: 100%;
        padding-top: 10px;
    };
    
    
`;

export const ListsDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
`;

export const KarmaInfo = styled.div`
    display: flex;
    flex-direction: row-reverse;
    button {
        all: unset;
    }
    svg {
        margin-left: 0.25rem;
        cursor: pointer;
    }
`;

export const KarmaInfoToast = styled.div`
    background-color: ${({ theme }) => theme.nord.blue3};
    color: ${({ theme }) => theme.nord.white2};
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
    border-radius: 10px;
    width: 30%;
    height: 100%;
    padding: 1.5rem;
    margin: 1rem;
    text-align: justify;
    transition: all 0.7s ease-in-out;
    button {
        all: unset;
        cursor: pointer;
        display: flex;
        justify-content: center;
    }

    ol {
        margin-top: 1rem;
        margin-bottom: 1rem;
        li {
            margin-left: 2rem;
        }
    }

    @media (max-width: 1030px) {
        width: 100%;
        height: 100%;
        padding: 1.5rem;
        margin: 1rem;

    };


    `;
