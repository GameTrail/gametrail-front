import styled from 'styled-components';

export const Flag = styled.img`
    width: 10.4rem;
    height: 6.4rem;
    margin: 0.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    border: 0.1rem solid ${({ theme }) => theme.nord.gray3};
    transition: all 0.2s ease-in-out;
    &:hover {
        border: 0.1rem solid ${({ theme }) => theme.nord.green};
    }
`;
