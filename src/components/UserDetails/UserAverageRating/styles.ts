import styled from "styled-components";

export const Container = styled.div`
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.white0};
    background-color: ${({ theme }) => theme.nord.gray1};
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray1};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    height: 60%;
    width: 50%;
    font-style: normal;
    font-family: "Outfit", sans-serif;
    color: var(--Red_Light, #fff4f0);
`;