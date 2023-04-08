import styled from 'styled-components';

export const CommentContainer = styled.div` 
    display: flex;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.nord.gray1};
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export const AvatarContainer = styled.div`
    flex-basis: 10%;
    aling-items: center;
    img {
        border-radius: 50%;
        margin-left: 0.5rem;
    }
`;

export const CommentContentContainer = styled.div`
    flex-basis: 90%;
    color: ${({ theme }) => theme.nord.white1};
    font-size: 2rem;
`;

export const CommentUsernameContainer = styled.div`
    font-size: 1rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        font-size: 1rem;
    };
`;

export const CommentTextContainer = styled.div`
    font-size: 1.2rem;
`;
