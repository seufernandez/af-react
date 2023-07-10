import { ChangeEvent, useState, useEffect } from 'react'
import {
  ClearInputButton,
  ClearInputIcon,
  SearchBarContainer,
  SearchIcon,
  SearchIconContainer,
  StyledInput,
} from './styles'
import { useProductsContext } from '../../hooks/useProduct'

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')

  const { handleSearchProductByName } = useProductsContext()

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const clearSearch = () => {
    setSearchTerm('')
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const performSearch = () => {
      handleSearchProductByName(searchTerm)
    }
    const debouncedSearch = () => {
      clearTimeout(timer)
      timer = setTimeout(performSearch, 500)
    }
    debouncedSearch()
    return () => clearTimeout(timer)
  }, [searchTerm])

  return (
    <label>
      <SearchBarContainer>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>

        <StyledInput
          type="text"
          placeholder="Digite sua pesquisa"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        {searchTerm && (
          <ClearInputButton onClick={clearSearch}>
            <ClearInputIcon />
          </ClearInputButton>
        )}
      </SearchBarContainer>
    </label>
  )
}
