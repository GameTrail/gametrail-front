import styled from 'styled-components';
import { motion } from 'framer-motion';

// css for the comments section
export const DivContainer = styled.div`
    width: 100%;
    border-radius: 1rem;
    display: flex;
    margin-bottom: 0.2rem;
`;

export const MotionDivContainer = motion(DivContainer);
export const MotionDivContainerVariants = {
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

export const InputField = styled.input`
    padding: 0.7rem;
    flex-grow: 1; 
    border-radius: 10px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.nord.gray1};
    color: ${({ theme }) => theme.nord.white1};
    font-size: 1.2rem;
    flex-basis: 5%;
    border-radius: 10px;
    color: ${({ theme }) => theme.nord.white1};
    margin-left: 10px;
`;
