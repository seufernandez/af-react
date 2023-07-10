import { css, styled } from 'styled-components'
interface PaginationItemProps {
  current?: boolean
}

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.7rem;

  margin-bottom: 2rem;
`

const currentStyles = css`
  color: ${(props) => props.theme.white};
  border: ${(props) => props.theme['blue-500']};
  background-color: ${(props) => props.theme['blue-500']};
`

const simpleStyles = css`
  color: ${(props) => props.theme['gray-500']};
  border: solid 1px ${(props) => props.theme['gray-500']};
  background-color: ${(props) => props.theme.white};
`

export const PaginationItem = styled.button<PaginationItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2rem;
  width: 2rem;

  border-radius: 999px;
  font-size: 0.875rem;

  cursor: pointer;

  ${(props) => (props.current ? currentStyles : simpleStyles)}
`

export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2rem;
  width: 2rem;

  border-radius: 999px;

  color: ${(props) => props.theme['gray-500']};
  border: solid 1px ${(props) => props.theme['gray-500']};
  background-color: ${(props) => props.theme.white};

  cursor: pointer;

  svg {
    height: 20px;
    width: 20px;
  }
`
