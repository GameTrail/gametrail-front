import styled from 'styled-components';
import { motion } from 'framer-motion';

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

export const MotionCommentsContainer = motion(CommentsContainer);
export const MotionCommentsContainerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: 5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};
