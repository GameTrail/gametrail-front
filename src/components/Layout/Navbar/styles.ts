import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.nord.gray1};
  color: ${({ theme }) => theme.nord.white0};
  box-shadow: 0 0 10px ${({ theme }) => theme.nord.gray2};

  @media (max-width: 768px) {
    padding: 0 20px;
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
`;

export const ResponsiveNavbar = styled.div`
  @media (max-width: 768px) {
      padding: 0 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      height: auto;
    }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: ${({ theme }) => theme.nord.gray1};
    color: ${({ theme }) => theme.nord.white0};
  }
`;

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.nord.gray3};
  }

  @media (max-width: 768px) {
    width: auto;
    height: auto;
    margin: 5px 0;
    padding: 10px 20px;
    border-radius: 5px;
    text-align: center;
  }
`;

interface MobileMenuIconProps {
  showMenu: boolean;
}

export const MobileMenuIcon = styled.div<MobileMenuIconProps>`
  display: flex;
  @media (max-width: 768px) {
    float: right;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-left: auto;
    transition: transform 0.3s ease-in-out;
    transform: ${(props) => (props.showMenu ? 'rotate(90deg)' : 'rotate(0)')};
    svg {
      font-size: 1.5rem;
    }
  }
`;

export const Premium = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 200% 200%;
  animation: gradient 5s ease infinite;
  border-radius: 8px;
  padding: 1em;
  margin-left: 1.2em;
  text-align: center;
  cursor: pointer;

@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

&:hover {
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  margin-left: 0;
}
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
    border-radius: 9px;
    width: 100%;
    height: auto;
    cursor: pointer;
    background-color: ${({ theme }) => theme.nord.gray3};

    box-shadow: 0 0 10px 0 ${({ theme }) => theme.nord.gray3};
    transition: all 0.3s ease-in-out;
    
    &:hover {
        box-shadow: 0 0 10px 0;
        background-color: ${({ theme }) => theme.nord.gray2};
    }
`;

export const Username = styled.p`
    font-size: 1em;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.white0};
    padding:1em;
`;

export const UserImage = styled(Image)`
    border-radius: 9px;
    height: auto;
`;
