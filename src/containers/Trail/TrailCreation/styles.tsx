import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.nord.white1};
  color: ${({ theme }) => theme.nord.gray0};
  .crown{
        margin: 0 auto;
        transform: scale(2);
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.nord.yellow};
        @keyframes changeColor {
            0% {
                color: #ee7752
            }
           
            20% {
                color: #e73c7e
            }
            40% {
                color: #23a6d5
            }
            60% {
                color: #23d5ab
            }
            80% {
                color: #e73c7e
            }
            100% {
                color: #ee7752
            }
     }
        animation: changeColor 2s linear infinite;
  }
`;
