import styled, { css } from 'styled-components'
import { ReactComponent as cartIcon } from '../../assets/icons/cart.svg'
interface ButtonContainerProps {
  ismobile?: string
}

const activeStyles = css`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  background-color: ${(props) => props.theme.white};
  border-top: solid 1px ${(props) => props.theme.whitesmoke};
`

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => (props.ismobile === 'true' ? activeStyles : null)}
`

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;

  width: 14.5rem;
  height: 3rem;
  flex-shrink: 0;
  background-color: ${(props) => props.theme['blue-500']};

  border: none;
  border-radius: 0.5rem;

  cursor: pointer;

  @media (max-width: 768px) {
    margin: 8px 16px;
  }
`

export const CartIconContainer = styled.div`
  position: relative;

  border-radius: 0.5rem;
  border: none;

  text-align: left;
`

export const CartIcon = styled(cartIcon)`
  fill: ${(props) => props.theme.white};
  height: 1rem;
  width: 1rem;
  margin: 0.5rem;
`
export const CounterBadge = styled.span`
  position: absolute;
  height: 1rem;
  width: 1rem;
  font-size: 0.75rem;

  right: -0.4rem;

  border-radius: 9999999px;

  background-color: red;
  color: ${(props) => props.theme.white};
  text-align: center;
`

export const ButtonText = styled.span`
  font-size: 1rem;

  color: ${(props) => props.theme.white};
  text-align: center;
`
