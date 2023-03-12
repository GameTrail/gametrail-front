import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    padding: 10px 30px;
    margin-top: 1rem;       
    img{
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 20px;
        box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
    }
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding-top: 10px;
        h1{
            margin-top: 1rem;
        }
    };

    white-space: pre;
    font-weight: 600;
    font-style: normal;
    letter-spacing: -0.6px;
    line-height: 1;
`;
