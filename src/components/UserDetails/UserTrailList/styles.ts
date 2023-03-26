import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1720px;
    margin-bottom: 25px;
    padding: 0 20px;
    @media (max-width: 768px) {
        width: 360px;
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
export const Item = styled.div`
    display: flex;
    cursor:pointer;
    flex-direction: row;
    font-size: 1rem;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.nord.gray3};
    border-radius: 10px;
    margin-bottom:10px;
    color: ${({ theme }) => theme.nord.white0};
    width: 100%;
    height: 60px;
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
        border-radius: 20px;
        box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3}; 
    }
    p{
        margin:0.5rem;
    }

    &:hover {
        box-shadow: 0 0 10px 0;
    }

    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        span{
            font-size: 0.50rem;
            font-weight: 400;
    };

     @media (max-width: 391px) {
        span{
            font-size: 0.4rem;
            padding:0.25rem;
            font-weight: 200;
        };
     };
`;
