import styled from 'styled-components';

// css for the comments section
export const CommentsContainer = styled.div`
    width: 85%;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.nord.gray1};
    padding-left: 1rem;
    padding-right: 1rem;
    div div:last-child {
        margin-botton:0;   
    }
    @media (max-width: 768px) {
        width: 100%;
    };
`;
