import styled from 'styled-components'
import { ReactComponent as menuIcon } from '../../assets/icons/menu.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;
`

export const LogoImg = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 700;
`

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.white};
`

export const MenuIcon = styled(menuIcon)`
  fill: ${(props) => props.theme['gray-700']};
  height: 1.5rem;
  width: 1.5rem;
  margin: 0.5rem;
`
