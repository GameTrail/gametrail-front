import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.2rem;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    padding: 20px 20px;
    span {
        font-size: 1rem;
        font-weight: 600;
        margin-right: 10px;
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-word;
        position: relative;
        flex-shrink: 0;
        font-style: normal;
        font-family: "Outfit", sans-serif;
        color: var(--Red_Light, #fff4f0);
        letter-spacing: 0;
        line-height: 1.2;
    }; 
`;
