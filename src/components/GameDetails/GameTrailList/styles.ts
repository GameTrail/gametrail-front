import styled from 'styled-components';

export const Item = styled.div`
    display: flex;
    cursor:pointer;
    flex-direction: row;
    font-size: 1em;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.nord.gray3};
    border-radius: 10px;
    margin-bottom:10px;
    color: ${({ theme }) => theme.nord.white0};
    width: 100%;
    padding: 10px 10px;
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
    transition: all 0.3s ease-in-out;
    span{
        padding:0.5rem;
        font-size: 0.75rem;
        font-weight: 400;
        border-radius: 10px;
        color: ${({ theme }) => theme.nord.white1};
    }
    img{
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 100%;
        box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
        @media (min-width: 768px) {
            width: 40px;
            height: 40px;
            border-radius: 100%;
        }
    }
    p{
        margin:0.5rem
    }
    &:hover {
        box-shadow: 0 0 10px 0 ;
    }
    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        font-size: 0.6em;
        span{
            font-size: 0.50rem;
            font-weight: 400;
        }
    };
    @media (max-width: 391px) {
        span{
            font-size: 0.4rem;
            padding:0.25rem;
            font-weight: 200;
        }
    };

`;

export const TrailListEmpty = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: 1.2em;
    font-weight: 600;
    
    @media (max-width: 768px) {
        font-size: 0.8em;
        font-weight: 600;
        width: 75vw;
        height: 50vh;
    }

`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    padding: 0 20px;
    @media (max-width: 1440px) {
        width: 70%;
        padding: 0;
    };
    @media (max-width: 768px) {
        width: 70%;
        padding: 0;
    };
    @media (max-width: 426px) {
        width: 80%;
        padding: 0;
    };
    @media (max-width: 375px) {
        width: 95%;
        padding: 0;
    };
`;

export const TrailName = styled.p`
font-size: 12px;
width: 250px;
white-space: nowrap; 
overflow: hidden;
text-overflow: ellipsis; 

 @media (max-width: 767px) {
  width: 100px; 
 }
`;

export const NumPlayers = styled.p`
 @media (max-width: 767px) {
    font-size: 12px;
 }

`;
