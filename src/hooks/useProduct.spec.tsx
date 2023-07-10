import { ProductsProvider, useProductsContext } from './useProduct'
import { renderHook, act } from '@testing-library/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

interface Props {
  children: any
}

describe('useProductsContext', () => {
  it('isLoadingProducts should be true by default', () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>{children}</ProductsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useProductsContext(), { wrapper })

    expect(result.current.isLoadingProducts).toBe(true)
  })

  it('products should be initially an empty array', () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>{children}</ProductsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useProductsContext(), { wrapper })

    expect(result.current.products).toEqual([])
  })

  it('AddProductToCart should be a function', () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>{children}</ProductsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useProductsContext(), { wrapper })

    expect(typeof result.current.AddProductToCart).toBe('function')
  })

  it('totalCartPrice should be initially 0', () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>{children}</ProductsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useProductsContext(), { wrapper })

    expect(result.current.totalCartPrice).toBe(0)
  })

  it('lastPage should be initially 1', () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>{children}</ProductsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useProductsContext(), { wrapper })

    expect(result.current.lastPage).toBe(1)
  })

  it('currentPage should be initially 1', () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>{children}</ProductsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useProductsContext(), { wrapper })

    expect(result.current.currentPage).toBe(1)
  })

  it('goToNextPage should be a function', () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>{children}</ProductsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useProductsContext(), { wrapper })

    expect(typeof result.current.goToNextPage).toBe('function')
  })

  it('goToPrevPage should be a function', () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>{children}</ProductsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useProductsContext(), { wrapper })

    expect(typeof result.current.goToPrevPage).toBe('function')
  })

  it('goToClickedPage should be a function', () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>{children}</ProductsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useProductsContext(), { wrapper })

    expect(typeof result.current.goToClickedPage).toBe('function')
  })

  it('errorLoadingProducts should be false by default', () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>{children}</ProductsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useProductsContext(), { wrapper })

    expect(result.current.errorLoadingProducts).toBe(false)
  })

  it('productsAddedToCart should be initially undefined', () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>{children}</ProductsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useProductsContext(), { wrapper })

    expect(result.current.productsAddedToCart).toEqual([])
  })

  it('handleChangeOptionOfSortByFilter should be a function', () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>{children}</ProductsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useProductsContext(), { wrapper })

    expect(typeof result.current.handleChangeOptionOfSortByFilter).toBe(
      'function',
    )
  })

  it('handleSearchProductByName should be a function', () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>{children}</ProductsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useProductsContext(), { wrapper })

    expect(typeof result.current.handleSearchProductByName).toBe('function')
  })

  it('productsPerPage should be initially 6', () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>{children}</ProductsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useProductsContext(), { wrapper })

    expect(result.current.productsPerPage).toBe(6)
  })

  it('should add a product to the cart', async () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>{children}</ProductsProvider>
      </QueryClientProvider>
    )
    const { result } = renderHook(() => useProductsContext(), { wrapper })
    const product = {
      productId: '111',
      productAmount: 2,
      productPrice: 2000,
    }

    act(() => {
      result.current.AddProductToCart({
        productId: product.productId,
        productAmount: product.productAmount,
        productPrice: product.productPrice,
      })
    })

    expect(result.current.productsAddedToCart).toEqual([product])
  })
})
