import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 750px;
    width: 550px;

    border-radius: 9px;
    border: 2px solid ${({ theme }) => theme.nord.gray3};

    @media (max-width: 768px) {
        height: 600px;
        width: 350px;
    }

    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.2);
        scale: 1.05;
    }
`;

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    height: 30%;
    width: 100%;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    border-bottom: 2px solid ${({ theme }) => theme.nord.gray3};
    background-color: ${({ theme }) => theme.nord.white2};
`;
export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 70%;
    width: 100%;
`;

export const Price = styled.h1`
    font-size: 2.6rem;
    font-weight: 600;
    color:${({ theme }) => theme.nord.gray0};
`;

export const PriceSpan = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
    color:${({ theme }) => theme.nord.gray0};
`;

export const Title = styled.h2`
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.nord.gray3};
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    margin-top: 20px;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ListItem = styled.li`
    font-size: 1.3rem;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.gray3};
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const Button = styled.button`
    width: 90%;
    height: 70px;
    border: none;
    border-radius: 9px;
    background-color: ${({ theme }) => theme.nord.blue0};
    color: ${({ theme }) => theme.nord.gray0};
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;

    margin-top: auto;
    margin-bottom: 1rem;
`;
