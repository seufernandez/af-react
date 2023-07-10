import { useProductsContext } from '../../hooks/useProduct'
import { PaginationContainer, PaginationItem, PaginationButton } from './styles'
import { ChevronRightIcon, ChevronLeftIcon } from '@radix-ui/react-icons'

export function Pagination() {
  const {
    currentPage,
    goToNextPage,
    goToPrevPage,
    lastPage,
    goToClickedPage,
    products,
  } = useProductsContext()

  const siblingsCount = 2

  function generatesPagesArray(from: number, to: number) {
    return [...new Array(to - from)]
      .map((_, index) => {
        return from + index + 1
      })
      .filter((page) => page > 0)
  }

  const previousPages =
    currentPage > 1
      ? generatesPagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatesPagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : []

  function handleGoToClickedPage(pageNumber: number) {
    goToClickedPage(pageNumber)
  }

  if (products !== undefined && products.length === 0) {
    return null
  }

  return (
    <PaginationContainer>
      {currentPage !== 1 && (
        <PaginationButton onClick={goToPrevPage}>
          <ChevronLeftIcon />
        </PaginationButton>
      )}

      {previousPages.length > 0 &&
        previousPages.map((page) => {
          return (
            <PaginationItem
              key={page}
              onClick={() => handleGoToClickedPage(page)}
            >
              {page}
            </PaginationItem>
          )
        })}

      <PaginationItem current>{currentPage}</PaginationItem>

      {nextPages.length > 0 &&
        nextPages.map((page) => {
          return (
            <PaginationItem
              key={page}
              onClick={() => handleGoToClickedPage(page)}
            >
              {page}
            </PaginationItem>
          )
        })}

      {currentPage !== lastPage && (
        <PaginationButton onClick={goToNextPage}>
          <ChevronRightIcon />
        </PaginationButton>
      )}
    </PaginationContainer>
  )
}
