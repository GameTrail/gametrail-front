import styled from "styled-components";

export type ContainerProps= {
    darkMode: boolean;
}
export const Container=styled.div<ContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    padding: 10px 30px;
    margin-top: 1rem;
    background-color: ${({ darkMode, theme }) => (!darkMode ? theme.nord.white2 : theme.nord.gray0)};
    color: ${({ darkMode, theme }) => (!darkMode ? theme.nord.gray1 : theme.nord.white0)};
    img{
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 20px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding-top: 10px;
    };

    white-space: pre;
    font-weight: 600;
    font-style: normal;
    letter-spacing: -0.6px;
    line-height: 1;
`;
