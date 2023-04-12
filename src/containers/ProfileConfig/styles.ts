import styled from 'styled-components';

export const MainContainer = styled.div`
`;

export const Header = styled.h1`
    color: ${({ theme }) => theme.nord.gray3};
    line-height: 1.2;
    text-align: left;
    font-size: 2.4rem;
    margin-bottom:1rem;
    margin-top:1rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-left:1rem;
    };

     @media (min-width: 1920px) {
        margin-left:30rem;
    };

`;

export const Separator = styled.hr`
    width: 50%;
    height: 1px;
    background-color: ${({ theme }) => theme.nord.gray3};
    margin-left:1rem;
    margin-bottom:1rem;
     @media (min-width: 1920px) {
        margin-left:30rem;
    };

     @media (max-width: 768px) {
        width: 90%;
    };


`;

export const MainHeader = styled.h1`
    color: ${({ theme }) => theme.nord.gray3};
    line-height: 1.2;
    text-align: left;
    font-size: 2.4rem;
    margin-bottom:2rem;
    margin-top:1rem;
    margin-left:10rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
        text-align: center;
        margin-left:0rem;
    };

`;