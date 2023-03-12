import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.nord.white2};
  line-height: 1.2;
  text-align: center;
  font-size: 1.6rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  };
`;

export const Container = styled.div` 
box-sizing: border-box;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 3%;
  padding-bottom: 6%;
  background: linear-gradient(360deg, #2e3440 0%, #4c566a 100%);
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 40px;
`;
