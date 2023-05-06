import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Author = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Date = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  font-size: 18px;
  line-height: 1.5;
  text-align: justify;

  p {
    margin-bottom: 10px;
  }
`;
