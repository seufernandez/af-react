import { styled } from 'styled-components'

export const ProductsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    margin-bottom: 5rem;
  }
`

export const ProductsTable = styled.div`
  width: 80vw;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
