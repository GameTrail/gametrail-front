import styled from 'styled-components';

export const PremiumContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 20px;
padding-bottom: 20px;
border-left: 1px solid ${({ theme }) => theme.nord.white1};
@media (max-width: 768px) {
  border-left: 0;
}
`;

export const PremiumInfo = styled.div`
width: 70%;
display: flex;
flex-direction: row;
justify-content: center;
gap: 1em;
@media (max-width: 768px) {
  width: 100%;
}
`;

export const DescriptionContainer = styled.div`
width: 80%;
margin-top: 7.5%;
margin-bottom: 5%;
font-size: 15px;
text-align: justify;
color: ${({ theme }) => theme.nord.white0};
`;

export const CrownContainer = styled.div`
width: 20px;
height: 20px;
@media (max-width: 768px) {
  width: 15px;
  height: 15px;
}
`;

export const TitlePremium = styled.p`
font-size: 22px;
font-weight: 600;
color: ${({ theme }) => theme.nord.white1};
text-align: center;
@media (max-width: 768px) {
  font-size: 18px;
}
`;

export const Label = styled.label`
  width: 80%;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.nord.white2};
  max-width: 60vw;
  text-align: start;
`;

export const PremiumFilterFirst = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
      font-size: 1px;
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
  padding: 0.5em;
  text-align: center;
  background-color: ${({ theme }) => theme.nord.white2};
  border: 0.1rem solid ${({ theme }) => theme.nord.white0};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: Unbounded;
`;
