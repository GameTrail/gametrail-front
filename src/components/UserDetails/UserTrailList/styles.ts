import styled from 'styled-components';

export const Item = styled.div`
    display: flex;
    cursor:pointer;
    flex-direction: row;
    font-size: 0.75rem;
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
        border-radius: 10px;
        box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3}; 
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
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    padding: 0 20px;
    @media (max-width: 768px) {
        width: 100%;
    };

`;
