import { useProductsContext } from '../../hooks/useProduct'
import {
  ButtonContainer,
  ButtonText,
  CartIcon,
  CartIconContainer,
  CounterBadge,
  StyledButton,
} from './styles'

interface ButtonContainerProps {
  isMobile?: boolean
}

export function CartButton({ isMobile }: ButtonContainerProps) {
  const { totalCartPrice, productsAddedToCart } = useProductsContext()

  return (
    <ButtonContainer ismobile={isMobile ? 'true' : undefined}>
      <StyledButton>
        <CartIconContainer>
          <CartIcon />
          {productsAddedToCart !== undefined &&
          productsAddedToCart.length > 0 ? (
            <CounterBadge>{productsAddedToCart?.length}</CounterBadge>
          ) : null}
        </CartIconContainer>

        <ButtonText>
          Sub total:{' '}
          {(totalCartPrice / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
          €
        </ButtonText>
      </StyledButton>
    </ButtonContainer>
  )
}
