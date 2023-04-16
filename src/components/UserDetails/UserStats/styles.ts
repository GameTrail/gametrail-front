import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1rem;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    padding: 20px 20px;
    svg{
        width: 20px;
        height: 20px;
    }
    svg {
        @keyframes blink {
            0% {
                box-shadow: 0 0 5px 0;
                border-radius: 50%;
            }
            50% {
                box-shadow: 0 0 2px 0 ;
                border-radius: 50%;
                }
            100% {
                box-shadow: 0 0 5px 0;
                border-radius: 50%;
            }
        }
        animation: blink 2s infinite;
    }; 
`;
