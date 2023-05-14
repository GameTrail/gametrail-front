import styled from 'styled-components';

export const BORDER_RADIUS = '9px';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.nord.white2};
    justify-content: center;
    width: 100%;
    height: auto;
    min-height: 100vh;
    padding: 2rem;
`;

export const Input = styled.input`
display: flex;
flex-direction: column;
width: 30%;
height: 40px;
border-radius: 10px;
text-align: center;
border: 3px solid ${({ theme }) => theme.nord.gray0};
margin-bottom: 20px;
font-size: 20px;
@media (max-width: 1068px) {
    width: 290px;
}
@media (max-width: 767px) {
    width: 220px;
}
@media (max-width: 567px) {
    width: 220px;
}
`;

export const TrailListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    width: 70%;
    height: auto;
    min-height: 100vh;

    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 1.2rem;
    }
`;
export const Title = styled.h1`
    font-size: 55px;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.gray1};
    margin-bottom: 1rem;
    @media (max-width: 588px) {
    font-size: 25px;
}
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 250px;
  background-color: ${({ theme }) => theme.nord.gray3};
  border: 1px solid ${({ theme }) => theme.nord.gray0};
  cursor: pointer;
  transition: transform 0.35s ease-in-out;
  border-radius: ${BORDER_RADIUS};

  &:hover {
    transform: scale(1.05);
    transition: transform 0.35s ease-in-out;
  }

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const CardImage = styled.img`
  height: 40%;
  width: 100%;
  object-fit: cover;
    border-top-left-radius: ${BORDER_RADIUS};
    border-top-right-radius: ${BORDER_RADIUS};
`;

export const CardContent = styled.div`
  height: 60%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.h2`
  font-size: 1.2em;
  margin: 0;
  color: ${({ theme }) => theme.nord.white2};
`;

export const TrailDate = styled.p`
  font-size: 0.8em;
  margin: 8px 0;
  color: ${({ theme }) => theme.nord.orange};
`;

export const Description = styled.p`
  font-size: 16px;
  margin: 4px 0;
  color: ${({ theme }) => theme.nord.white2};
`;

export const Players = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.nord.green};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    
    width: 100%;

    // mobile
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
