import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 30%;
    height: 100%;
    
    // mobile
    @media (max-width: 768px) {
        width: 80vw;
        align-items: center;
    }
`;

export const Label = styled.label`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.gray1};

    margin-top: 1em;
`;

export const Input = styled.input`
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    border: 1px solid ${({ theme }) => theme.nord.gray0};
    border-radius: 4px;
    font-size: 1.5rem;
    &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.nord.gray1};
    }
`;

export const PlatformSelect = styled.select`
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    border: 1px solid ${({ theme }) => theme.nord.gray0};
    border-radius: 4px;
    font-size: 1.5rem;
    &:focus {
        outline: none;
    }
`;

export const PlatformOption = styled.option`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.gray1};
`;

export const SearchButton = styled.button`
    width: 150px;
    height: 45px;

    margin-top: 1em;
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.nord.gray1};
    color: ${({ theme }) => theme.nord.white0};
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.nord.gray2};
    }

    // mobile
    @media (max-width: 768px) {
      width: 80vw;
      font-size: 1.2rem;
    }
`;
