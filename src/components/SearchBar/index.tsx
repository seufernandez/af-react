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
  const { handleSearchProductByName, searchProductName } = useProductsContext()
  const [searchTerm, setSearchTerm] = useState(searchProductName)
  const [timer, setTimer] = useState<number | null>(null)

  useEffect(() => {
    return () => {
      if (timer !== null) {
        clearTimeout(timer)
      }
    }
  }, [timer])

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchTerm(value)

    if (timer !== null) {
      clearTimeout(timer)
    }

    if (value !== '') {
      const newTimer = window.setTimeout(() => {
        performSearch(value)
      }, 500) // Atraso de 300ms
      setTimer(newTimer)
    } else {
      clearSearch()
    }
  }

  const performSearch = (value: string) => {
    handleSearchProductByName(value)
  }

  const clearSearch = () => {
    setSearchTerm('')
    handleSearchProductByName('')
  }

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
