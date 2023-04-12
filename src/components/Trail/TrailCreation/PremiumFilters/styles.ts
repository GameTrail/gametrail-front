import styled from 'styled-components';

export const Label = styled.label`
  width: 100%;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.nord.white2};
  max-width: 60vw;
`;

export const PremiumFilterFirst = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  align-content: end;
  gap: 2rem;
  margin-top: 1rem;
  @media (max-width: 768px) {
    width: 100%;
    gap:0.5rem;
  }
  @media (max-width: 1000px) {
    width: 100%;
    gap:0.5rem;
  }
  @media (max-width: 475px) {
    flex-direction: column;
  }
  div{
    input{
      width: 100%;
      font-size: 1.2rem;
    }
  }
`;

export const PremiumFilterSecond = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  align-content: end;
  gap: 0rem;
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap:0.5rem;
  }
  div{
    input{
      width: 80%;
      font-size: 1.2rem;
      margin:0 auto;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    label{
      margin-left: 2rem;
      text-align: left;
      @media (max-width: 768px) {
        margin-left: 0;
      }
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  padding: 1em;
  background-color: ${({ theme }) => theme.nord.white2};
  border: 0.1rem solid ${({ theme }) => theme.nord.white0};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: Unbounded;
`;
