import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.2rem;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    padding: 20px 20px;
    span {
        @keyframes blink {
            0% {
                box-shadow: 0 0 5px 0  ;
                border-radius: 50%;
            }
            50% {
                box-shadow: 0 0 2px 0 ;
                border-radius: 50%;
                }
            100% {
                box-shadow: 0 0 5px 0 ;
                border-radius: 50%;
            }
        }
        animation: blink 3s infinite;
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
