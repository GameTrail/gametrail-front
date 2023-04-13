import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.nord.gray0};
  text-align: center;
  font-size: 2rem;
  padding: 5%;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  };
`;

export const Container = styled.div`
  width: 30%;
  padding-bottom: 5%;
  text-align: justify;
  @media (max-width: 768px) {
  };
`;

export const Text = styled.p`
@media (max-width: 768px) {
    font-size: 0.5rem;
  };
`;

export const Subtitle = styled.h1`
margin-top: 1em;
@media (max-width: 768px) {
   font-size: 0.5rem;
  };
`;

export const Subtitle2 = styled.h2`
margin-top: 1em;
@media (max-width: 768px) {
    font-size: 0.5rem;
  };
`;

export const Subtitle3 = styled.h3`
margin-top: 1em;
@media (max-width: 768px) {
    font-size: 0.5rem;
  };
`;

export const Strong = styled.strong`
margin-top: 2em;
margin-right: 0.5em;
@media (max-width: 768px) {
    font-size: 0.5rem;
  };
`;

export const Ul = styled.ul`
margin-top: 1em;
@media (max-width: 768px) {
    font-size: 0.5rem;
  };
`;

export const Li = styled.li`
margin-top: 1em;
@media (max-width: 768px) {
    font-size: 0.5rem;
  };
`;
