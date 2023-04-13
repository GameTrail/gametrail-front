import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 0.8em;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    svg {
        width: 5%;
        height: 5%;
    }
    @media (max-width: 768px) {
        padding-bottom: 1em;
        padding-top: 1em;
        padding-left: 31%;
        font-size: 0.6em;
        svg {
            width: 3%;
            height: 3%;
        }
    }
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
