import styled from 'styled-components';

export const BORDER_RADIUS = '0px';

export const MainTitle = styled.h1`
    font-size: 2.5em;
    color: ${({ theme }) => theme.nord.gray0};
    margin-top: 4rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 2rem;
    width: 80%;
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
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.h2`
  font-size: 1.1em;
  color: ${({ theme }) => theme.nord.white2};
`;

export const Author = styled.p`
    font-size: 0.8em;
    color: ${({ theme }) => theme.nord.white2};
`;

export const BlogDate = styled.p`
  font-size: 0.8em;
  color: ${({ theme }) => theme.nord.orange};
`;
