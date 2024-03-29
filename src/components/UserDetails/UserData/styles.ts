import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 2rem;
    padding: 10px 30px;   
    white-space: pre;
    font-weight: 600;
    .crown{
        color: ${({ theme }) => theme.nord.yellow};
        width: 25px;
        margin-right: 5px;
        height: 25px;
        @keyframes changeColor {
            0% {
                color: #ee7752
            }
           
            20% {
                color: #e73c7e
            }
            40% {
                color: #23a6d5
            }
            60% {
                color: #23d5ab
            }
            80% {
                color: #e73c7e
            }
            100% {
                color: #ee7752
            }
     }
        animation: changeColor 2s linear infinite;
    }
    .gear {
        cursor: pointer;
        width: 25px;
        height: 25px;
        color: ${({ theme }) => theme.nord.gray3};
        animation: rotateGear 5s linear infinite;
    }
    @keyframes rotateGear {
        from {
                transform: rotate(0deg);
        }
        to {
                transform: rotate(360deg);
        }
    }
    img{
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 100%;
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
`;

export const RateButton = styled.button`
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 8px;
    width: 100px;
    border: none;
    background-color: ${({ theme }) => (theme.nord.gray3)};
    color: ${({ theme }) => (theme.nord.white0)};
    &:hover {
        transition: all 0.3s ease-in-out;
        box-shadow: 0 0 10px 0;
        background-color: ${({ theme }) => (theme.nord.gray3)};
    }
    @media (max-width: 768px) {
        width: 105px;
        font-size: 0.8rem;
        font-weight: 400;
        padding: 10px 20px;
        border-radius: 8px;
    }
`;

export const RateContainer = styled.form`
  position: absolute; 
  top: 0; 
  right: 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.nord.gray2};
  margin-top: 8rem;
  height: 30em;
  width: 30em;
  border-radius: 8px;
  margin-right: 8rem;
  z-index: 1;
  h2{
      color: ${({ theme }) => theme.nord.white0};
      margin-bottom:1rem;
  }
  label{
      color: ${({ theme }) => theme.nord.white0};
  }
  padding: 1rem;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
  @media (max-width: 768px) {
        height: 20em;
        width: 20em;
      flex-direction: column;
      align-items: center;
      position:fixed;
      gap:0.5rem;
      z-index: 1;
    margin-right: 0;
      justify-content: center;
  };
`;

export const MotionRateContainer = motion(RateContainer);
export const MotionRateContainerVariants = {
  closed: {
    opacity: 0,
    scale: 0,
    y: '-30vh',
  },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

export const RateInput = styled.input`
    display: none;
    width: 100px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.nord.gray3};
    padding: 0 10px;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.nord.gray3};
    background-color: ${({ theme }) => theme.nord.white0};
    &:focus {
        outline: none;
    }
    @media (max-width: 768px) {
        width: 105px;
        font-size: 0.8rem;
        font-weight: 400;
        padding: 0 10px;
        border-radius: 8px;
    }
`;

export const RateLabel = styled.label`
    display: none;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.nord.gray3};
    @media (max-width: 768px) {
        font-size: 0.8rem;
        font-weight: 400;
    }
`;

export const RateButtonSubmit = styled.button`
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 8px;
    margin-top: 1rem;
    width: 100px;
    border: none;
    background-color: ${({ theme }) => (theme.nord.gray3)};
    color: ${({ theme }) => (theme.nord.white0)};
    &:hover {
        transition: all 0.3s ease-in-out;
        box-shadow: 0 0 10px 0;
        background-color: ${({ theme }) => (theme.nord.gray3)};
    }
    @media (max-width: 768px) {
        width: 105px;
        font-size: 0.8rem;
        font-weight: 400;
        padding: 10px 20px;
        border-radius: 8px;
    }
`;

export const CloseRateContainer = styled.button`
    background-color: ${({ theme }) => theme.nord.gray1};
    color: ${({ theme }) => theme.nord.white0};
    font-size: 1.2rem;
    font-weight: 400;
    border-radius: 8px;
    border:none;
    width: 50px;
    padding: 2px 5px;
  
  margin-bottom: 2rem;
    cursor: pointer;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const ErrorContainer = styled.div`
  text-align: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.nord.red};
  color: ${({ theme }) => theme.nord.white2};
  border-color: black;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  height: auto;
  padding: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  };
`;
