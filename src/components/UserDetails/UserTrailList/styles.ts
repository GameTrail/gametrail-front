import styled from 'styled-components';

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.nord.gray3};
    border-radius: 10px;
    margin-bottom:10px;
    color: ${({ theme }) => theme.nord.white0};
    width: 100%;
    height: 100%;
    padding: 20px 20px;
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
    transition: all 0.3s ease-in-out;
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
        height: 100%;
    };
`;


