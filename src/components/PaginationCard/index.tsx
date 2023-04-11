import type { FC } from 'react';
import { Container, PageButton } from './styles';

interface Props {
  pages: number;
  currentPage: number;
  handlePagination: (pageNumber: number) => void;
}

const PaginationCard: FC<Props> = ({ pages, currentPage, handlePagination }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePagination(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages) {
      handlePagination(currentPage + 1);
    }
  };

  const handleRenderNewPage = () => {
    if (currentPage > 3) {
      return <PageButton key={currentPage} active onClick={() => handlePagination(currentPage)}>{currentPage}</PageButton>;
    }
    return null;
  };

  const handleRenderPages = () => {
    if (pages > 3) {
      return (
        <>
          <PageButton onClick={handlePrevPage}>Prev</PageButton>
          <PageButton key={1} active={currentPage === 1} onClick={() => handlePagination(1)}>
            1
          </PageButton>
          <PageButton key={2} active={currentPage === 2} onClick={() => handlePagination(2)}>
            2
          </PageButton>
          <PageButton key={3} active={currentPage === 3} onClick={() => handlePagination(3)}>
            3
          </PageButton>
          {handleRenderNewPage()}
          <PageButton onClick={handleNextPage}>Next</PageButton>
          <h1> ... </h1>
          <PageButton key={pages} onClick={() => handlePagination(pages)}>
            {pages}
          </PageButton>
        </>
      );
    }

    return (
      <>
        <PageButton onClick={handlePrevPage}>Prev</PageButton>
        {Array.from(Array(pages).keys()).map((page) => {
          const pageIndex = page + 1;
          return (
            <PageButton key={pageIndex} active={currentPage === pageIndex} onClick={() => handlePagination(pageIndex)}>
              {pageIndex}
            </PageButton>
          );
        })}
        <PageButton onClick={handleNextPage}>Next</PageButton>
      </>
    );
  };

  return <Container>{handleRenderPages()}</Container>;
};

export default PaginationCard;
