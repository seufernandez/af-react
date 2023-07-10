import { styled } from 'styled-components'

export const AddProductToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 36px;
  flex-shrink: 0;

  border-radius: 4px;
  border: 1px solid #9dc2ff;
  background: ${(props) => props.theme.white};

  color: ${(props) => props.theme['blue-500']};
  font-weight: 500;

  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme['blue-100']};
  }

  svg {
    color: ${(props) => props.theme['green-500']};
    height: 1.5rem;
    width: 1.5rem;
  }
`

export const ProductItem = styled.div`
  /* background-color: ${(props) => props.theme.white}; */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background-color: ${(props) => props.theme.white};
  height: 32rem;
  width: 100%;

  border: solid 1px ${(props) => props.theme['gray-200']};
  border-radius: 0.5rem;

  padding: 1.25rem;

  section {
    display: flex;
    justify-content: space-between;
  }
`

export const ProductImage = styled.img`
  height: 18rem;
  width: 100%;

  border-radius: 0.5rem;
  object-fit: contain;
`

export const ProductTitle = styled.span`
  font-size: 1rem;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.44px;

  min-height: 4.5rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  text-overflow: ellipsis;
`

export const ProductRating = styled.div`
  display: flex;
  justify-content: flex-start;

  .rating-number {
    margin-left: 0.5rem;
  }
`
export const ProductPrice = styled.b`
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`
export const ProductAmount = styled.input`
  width: 4rem;
  height: 36px;
  flex-shrink: 0;

  border-radius: 4px;
  border: 1px solid var(--gray-30, #b4b4bb);

  padding: 0.5rem;
`
