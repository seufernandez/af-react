import styled from 'styled-components'
import { ReactComponent as searchIcon } from '../../assets/icons/searchIcon.svg'
import { ReactComponent as closeIcon } from '../../assets/icons/close.svg'

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 0.5rem;

  max-width: 20rem;
  height: 3rem;
  background-color: ${(props) => props.theme['gray-100']};

  padding: 0.5rem;
  margin: 0 1rem;

  &:focus-within {
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
  }
`

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme['gray-100']};

  padding: 0.5rem;

  border: none;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme['gray-300']};
  }

  &:focus {
    box-shadow: none;
  }
`
export const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;

  border-radius: 0.5rem;
  border: none;
`

export const SearchIcon = styled(searchIcon)`
  fill: ${(props) => props.theme['gray-700']};
  height: 1rem;
  width: 1rem;
  margin: 0.5rem;
`

export const ClearInputButton = styled.button`
  display: flex;
  align-items: center;

  border-radius: 0.5rem;
  border: none;
`

export const ClearInputIcon = styled(closeIcon)`
  margin: 0.5rem;

  height: 1rem;
  width: 1rem;
`
