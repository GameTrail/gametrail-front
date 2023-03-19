import styled from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 135px;
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

export const Menu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 20px;
    padding: 0;
    background-color: ${({ theme }) => theme.nord.gray1};
    color: ${({ theme }) => theme.nord.white0};
  }
`;

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.nord.gray3};
    height: 60px;
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

export const MobileMenuIcon = styled.div`
  display: flex;

  @media (max-width: 768px) {
    float: right;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-left: auto;

    svg {
      font-size: 1.5rem;
    }
  }
`;
