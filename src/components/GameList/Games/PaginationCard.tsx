import styled from 'styled-components';
import type { FC } from 'react';

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 10px;
`;

export const PageButton = styled.button`
    width: 80px;
    height: 50px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`;

export const PageText = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
`;

interface Props {
  pages: number;
  handlePagination: (pageNumber: number) => void;
}

const PaginationCard: FC<Props> = ({ pages, handlePagination }) => {
  const handleRenderPages = () => {
    if (pages > 3) {
      return (
        <>
          <PageButton key={1} onClick={() => handlePagination(1)}>
            1
          </PageButton>
          <PageButton key={2} onClick={() => handlePagination(2)}>
            2
          </PageButton>
          <PageButton key={3} onClick={() => handlePagination(3)}>
            3
          </PageButton>
          <h1> ... </h1>
          <PageButton key={pages} onClick={() => handlePagination(pages)}>
            {pages}
          </PageButton>
        </>
      );
    }

    return Array.from(Array(pages).keys()).map((page) => (
      <PageButton key={page + 1} onClick={() => handlePagination(page + 1)}>
        {page + 1}
      </PageButton>
    ));
  };

  return <Container>{handleRenderPages()}</Container>;
};

export default PaginationCard;
