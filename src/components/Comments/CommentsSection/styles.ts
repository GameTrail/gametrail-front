import styled from 'styled-components';

// css for the comments section
export const CommentsContainer = styled.div`
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.nord.gray1};
    padding-left: 1rem;
    padding-right: 1rem;
    width: 50vw;

    @media (max-width: 768px) {
        width: 90vw;
        flex-wrap: wrap;
    }   
`;
