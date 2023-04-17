import styled from 'styled-components';

export const Container = styled.div`
  height: 180vh;
  width: 80vw;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 5em;
  margin-top: 3em;
  margin-bottom: 3em;
  box-shadow: 0 0 0.5em 0.1em ${({ theme }) => theme.nord.gray0};
  border-radius: 0.5em;
  background: ${({ theme }) => theme.nord.gray3};
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
  @media (max-width: 768px) {
    flex-direction: column;         
    width: 100vw;      
    height: 180vh;
    justify-content: center;
    svg{
      max-width: 0;
      max-height: 0;
    }
  };
`;
