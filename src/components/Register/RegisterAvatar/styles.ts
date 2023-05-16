import styled from 'styled-components';

interface IRegisterAvatarImageProps {
  isSelected: boolean;
}

export const RegisterAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; 
  background-color: ${({ theme }) => theme.nord.gray2};
  height: 200px; 
  gap: 1rem;
  width: 400px;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
  overflow: auto; 
  scrollbar-width: thin; 
  scrollbar-color: ${({ theme }) => theme.nord.white0} ${({ theme }) => theme.nord.gray2}; 
  
  &::-webkit-scrollbar {
    width: 8px; 
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.nord.gray2}; 
    border-radius: 8px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.nord.white0}; 
    border-radius: 8px; 
  }

  @media (max-width: 820px) {
    gap: 0.5rem;
    width: 100%;
    justify-content: center;
  }
`;

export const RegisterAvatarImage = styled.img<IRegisterAvatarImageProps>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px 0 ${({ isSelected }) => (isSelected ? ({ theme }) => theme.nord.white0 : 'none')};

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }

    &:hover {
        box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.white0}; 
    }

`;

type ButtonProps = {
  primary?: boolean;
  animated?: boolean;
};

export const RegisterAvatarAccept = styled.button<ButtonProps>`
    height: 40px;
    width: 150px;
    border-radius: 9px;
    padding: 0 10px;
    font-size: 1.4rem;
    border: none;
    cursor: pointer;
    color: ${({ theme, primary }) => (primary ? theme.nord.gray1 : theme.nord.white2)};
    background: ${({ theme, primary }) => (primary ? theme.nord.white0 : theme.nord.gray1)};
    @media (max-width: 768px) {
        width: 100%;
    }
    ${({ animated }) => animated
        && `
        animation: bounce 1s;
        animation-iteration-count: infinite;
        
        @keyframes bounce {
            0% {
                scale: 1;
            }
            50% {
                scale: 1.05;
            } 
            100% {
                scale: 1;
            }
        }
    `};

    @media (max-width: 768px) {
        width: 90%;
    }
    &:hover {
        transform: ${({ primary }) => (primary ? 'scale(1.05)' : 'none')};
        transition: transform 0.2s;
        box-shadow: 0 0 3px ${({ theme }) => theme.nord.gray2};
    }
`;
