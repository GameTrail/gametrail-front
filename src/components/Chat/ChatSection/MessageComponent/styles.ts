import styled from 'styled-components';

export const CommentContainer = styled.div` 
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.nord.gray1};
    margin-top: 2rem;
    margin-bottom: 2rem;
    word-wrap: break-word;
`;

export const AvatarContainer = styled.div`
    aling-items: center;
    background-color: ${({ theme }) => theme.nord.gray1};
    img {
        border-radius: 50%;
        margin-left: 0.5rem;
    }

`;

export const CommentContentContainer = styled.div`
    flex-basis: 90%;
    max-width: 90%;
    color: ${({ theme }) => theme.nord.white1};
    font-size: 2rem;
    background-color: ${({ theme }) => theme.nord.gray1};
`;

export const CommentUsernameContainer = styled.div`
    flex-basis: 90%;
    color: ${({ theme }) => theme.nord.white1};
    background-color: ${({ theme }) => theme.nord.gray1};
    font-size: 1rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        font-size: 1rem;
    };
`;

export const CommentTextContainer = styled.div`
    flex-basis: 90%;
    color: ${({ theme }) => theme.nord.white1};
    background-color: ${({ theme }) => theme.nord.gray1};
    font-size: 1.2rem;
`;
