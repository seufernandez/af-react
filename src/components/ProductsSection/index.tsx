import { useEffect, useCallback } from 'react'
import { useProductsContext } from '../../hooks/useProduct'
import { ProductsFilter } from '../ProductsFilter'

import { Pagination } from './../Pagination/index'
import { ProductsSectionContainer, ProductsTable } from './styles'
import { Skeleton } from '../Skeleton'
import { ProductItemComponent } from '../ProductItemComponent'

export function ProductsSection() {
  const { products, isLoadingProducts, errorLoadingProducts } =
    useProductsContext()

  const scrollToTop = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    if (scrollTop > 0) {
      window.requestAnimationFrame(scrollToTop)
      window.scrollTo(0, scrollTop - scrollTop / 30)
    }
  }, [])

  useEffect(() => {
    scrollToTop() // Inicia a animação de rolagem
  }, [products, scrollToTop]) // Executa o efeito sempre que a localização mudar

  if (isLoadingProducts) {
    return (
      <ProductsSectionContainer>
        <ProductsFilter />

        <Skeleton />
      </ProductsSectionContainer>
    )
  }

  if (errorLoadingProducts) {
    return (
      <ProductsSectionContainer>
        <span>Erro ao buscar dados da API</span>
      </ProductsSectionContainer>
    )
  }

  if (products?.length === 0) {
    return (
      <ProductsSectionContainer>
        <div>
          <h3>No products match your search</h3>
          <ul>
            <li>
              <strong>Check the spelling</strong> of the word.
            </li>
            <li>
              Use <strong>more generic words</strong> or fewer words.
            </li>
          </ul>
        </div>
      </ProductsSectionContainer>
    )
  }

  return (
    <ProductsSectionContainer>
      <ProductsFilter />

      <ProductsTable>
        {products?.map((product) => {
          return <ProductItemComponent key={product.id} product={product} />
        })}
      </ProductsTable>
      <Pagination />
    </ProductsSectionContainer>
  )
}
