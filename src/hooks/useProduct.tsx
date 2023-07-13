import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useReducer,
} from 'react'
import { useQuery } from '@tanstack/react-query'

const API_URL = 'https://graphql.datocms.com/'
const apiToken = process.env.VITE_REACT_DATOCMS_READ_ONLY_API_TOKEN

export interface Product {
  id: string
  name: string
  price: number
  rating: number
  image: {
    url: string
  }
  _firstPublishedAt: string
}

interface FecthProductsAPIResponse {
  productsArray: Product[]
  lastPage: number
}

interface CartProductsReducerActionProps {
  type: 'addProduct' | 'removeProduct'
  productId: string
  productAmount: number
  productPrice: number
}

interface AddProductToCartProps {
  productId: string
  productAmount: number
  productPrice: number
}

interface AddedProductToCartProps {
  productId: string
  productAmount: number
  productPrice: number
}

interface ProductsContextValue {
  products: Product[] | undefined
  isLoadingProducts: boolean
  AddProductToCart: ({
    productId,
    productAmount,
    productPrice,
  }: AddProductToCartProps) => void
  totalCartPrice: number
  lastPage: number
  currentPage: number
  goToNextPage: () => void
  goToPrevPage: () => void
  goToClickedPage: (number: number) => void
  errorLoadingProducts: boolean
  productsAddedToCart: AddedProductToCartProps[] | undefined
  handleChangeOptionOfSortByFilter: (
    option: 'rating_DESC' | 'price_DESC' | '_publishedAt_DESC',
  ) => void
  handleSearchProductByName: (searchTerm: string) => void
  searchProductName: string
  productsPerPage: number
}

interface ProductsProviderProps {
  children: ReactNode
}

const ProductsContext = createContext<ProductsContextValue>({
  products: [],
  isLoadingProducts: true,
  AddProductToCart: () => {},
  totalCartPrice: 0,
  lastPage: 1,
  currentPage: 1,
  goToNextPage: () => {},
  goToPrevPage: () => {},
  goToClickedPage: () => {},
  errorLoadingProducts: false,
  productsAddedToCart: [],
  handleChangeOptionOfSortByFilter: () => {},
  handleSearchProductByName: () => {},
  searchProductName: '',
  productsPerPage: 0,
})

interface CartReducerValueProps {
  cartProductsArray: AddedProductToCartProps[]
  totalPrice: number
}

function cartProductsReducer(
  state: CartReducerValueProps,
  action: CartProductsReducerActionProps,
) {
  if (action.type === 'addProduct') {
    const {
      productId,
      productPrice,
      productAmount: addedProductAmount,
    } = action

    const totalPriceAdded = addedProductAmount * productPrice

    const existingProductIndex = state.cartProductsArray.findIndex(
      (product) => product.productId === productId,
    )

    if (existingProductIndex !== -1) {
      const updatedAmount =
        state.cartProductsArray[existingProductIndex].productAmount +
        addedProductAmount

      const updatedProductsArray = [...state.cartProductsArray]
      updatedProductsArray[existingProductIndex] = {
        ...updatedProductsArray[existingProductIndex],
        productAmount: updatedAmount,
      }

      const updatedCartState = {
        ...state,
        cartProductsArray: updatedProductsArray,
        totalPrice: state.totalPrice + totalPriceAdded,
      }

      saveCartStateToLocalStorage(updatedCartState)

      return updatedCartState
    }

    const updatedCartState = {
      cartProductsArray: [
        ...state.cartProductsArray,
        {
          productId,
          productAmount: addedProductAmount,
          productPrice,
        },
      ],
      totalPrice: state.totalPrice + totalPriceAdded,
    }

    saveCartStateToLocalStorage(updatedCartState)

    return updatedCartState
  }

  return state
}

function saveCartStateToLocalStorage(state: CartReducerValueProps) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('afreact_cart_state', serializedState)
  } catch (error) {
    console.error('Erro ao salvar estado no localStorage:', error)
  }
}

const initialReducerValue: CartReducerValueProps = {
  cartProductsArray: [],
  totalPrice: 0,
}

function loadCartStateFromLocalStorage(): CartReducerValueProps {
  try {
    const serializedState = localStorage.getItem('afreact_cart_state')
    if (serializedState === null) {
      return initialReducerValue
    }
    return JSON.parse(serializedState)
  } catch (error) {
    console.error('Erro ao obter estado do localStorage:', error)
    return initialReducerValue
  }
}

function loadCurrentPageFromLocalStorage(): number {
  try {
    const savedNumber = localStorage.getItem('afreact_current_page')

    if (savedNumber === null) {
      return 1
    }

    const parsedNumber = parseInt(savedNumber)
    return parsedNumber
  } catch (error) {
    console.error('Erro ao obter estado do localStorage:', error)
    return 1
  }
}

function saveCurrentPageOnLocalStorage(currentPage: number) {
  try {
    localStorage.setItem('afreact_current_page', currentPage.toString())
  } catch (error) {
    console.error('Erro ao salvar estado no localStorage:', error)
  }
}

function loadSearchTermFromLocalStorage(): string {
  try {
    const searchTerm = localStorage.getItem('afreact_search_term')

    if (searchTerm === null) {
      return ''
    }

    return searchTerm
  } catch (error) {
    console.error('Erro ao obter estado do localStorage:', error)
    return ''
  }
}

function saveSearchTermOnLocalStorage(searchTerm: string) {
  try {
    localStorage.setItem('afreact_search_term', searchTerm)
  } catch (error) {
    console.error('Erro ao salvar estado no localStorage:', error)
  }
}

const useProducts = (): ProductsContextValue => {
  const [searchProductName, setSearchProductName] = useState(
    loadSearchTermFromLocalStorage(),
  )
  const [currentPage, setCurrentPage] = useState<number>(
    loadCurrentPageFromLocalStorage(),
  )
  const [sortByFilterOption, setSortByFilterOption] =
    useState('_publishedAt_DESC')

  const [cartProductsState, cartProductsDispatch] = useReducer(
    cartProductsReducer,
    loadCartStateFromLocalStorage() as never,
  )

  const productsPerPage = 6

  function handleSearchProductByName(searchTerm: string) {
    setSearchProductName(searchTerm)

    saveSearchTermOnLocalStorage(searchTerm)
    saveCurrentPageOnLocalStorage(1)
    setCurrentPage(1)
  }

  function handleChangeOptionOfSortByFilter(
    option: 'rating_DESC' | 'price_DESC' | '_publishedAt_DESC',
  ) {
    setSortByFilterOption(option)
  }
  const productsAddedToCart = cartProductsState?.cartProductsArray
  const totalCartPrice = cartProductsState?.totalPrice

  function goToNextPage() {
    setCurrentPage((currentPage) => {
      saveCurrentPageOnLocalStorage(currentPage + 1)
      return currentPage + 1
    })
  }

  function goToPrevPage() {
    setCurrentPage((currentPage) => {
      saveCurrentPageOnLocalStorage(currentPage - 1)
      return currentPage - 1
    })
  }

  function goToClickedPage(pageNumber: number) {
    saveCurrentPageOnLocalStorage(pageNumber)
    setCurrentPage(pageNumber)
  }

  const paginationVariables = {
    productsPerPage,
    skip: (currentPage - 1) * 6,
  }

  const {
    data: { productsArray: products = [], lastPage = 1 } = {},
    isLoading: isLoadingProducts,
    isError: errorLoadingProducts,
  } = useQuery<FecthProductsAPIResponse | undefined>(
    ['products', paginationVariables, sortByFilterOption, searchProductName],
    async () => {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify({
          query: `
          {
            allProducts(
                first: ${paginationVariables.productsPerPage},
                skip: ${paginationVariables.skip},
                orderBy: [${sortByFilterOption}],
                ${
                  searchProductName !== ''
                    ? ` filter: {
                        name: { matches: { pattern: "${searchProductName}"} },
                      }`
                    : ''
                }
              ) {
                id
                name
                price
                rating
                image {
                  url(imgixParams: {fm: jpg, fit: crop, w: 120, h: 120})
                }
                _firstPublishedAt
              }
              _allProductsMeta
                ${
                  searchProductName !== ''
                    ? ` (filter: {
                      name: { matches: { pattern: "${searchProductName}"} },
                    })`
                    : ''
                } {
                count
              }
            }
          `,
        }),
      })

      const { data } = await response.json()
      const productsArray = data.allProducts
      const totalProducts = data._allProductsMeta.count
      const lastPage = Math.ceil(
        totalProducts / paginationVariables.productsPerPage,
      )

      return { productsArray, lastPage }
    },
    {
      staleTime: 1000 * 60, // 1 min
    },
  )

  function AddProductToCart({
    productId,
    productAmount,
    productPrice,
  }: AddProductToCartProps) {
    cartProductsDispatch({
      type: 'addProduct',
      productId,
      productAmount,
      productPrice,
    })
  }

  return {
    products,
    isLoadingProducts,
    AddProductToCart,
    totalCartPrice,
    lastPage,
    currentPage,
    goToNextPage,
    goToPrevPage,
    goToClickedPage,
    errorLoadingProducts,
    productsAddedToCart,
    handleChangeOptionOfSortByFilter,
    handleSearchProductByName,
    searchProductName,
    productsPerPage,
  }
}

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const {
    products,
    isLoadingProducts,
    AddProductToCart,
    totalCartPrice,
    lastPage,
    currentPage,
    goToNextPage,
    goToPrevPage,
    goToClickedPage,
    errorLoadingProducts,
    productsAddedToCart,
    handleChangeOptionOfSortByFilter,
    handleSearchProductByName,
    searchProductName,
    productsPerPage,
  } = useProducts()

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoadingProducts,
        AddProductToCart,
        totalCartPrice,
        lastPage,
        currentPage,
        goToNextPage,
        goToPrevPage,
        goToClickedPage,
        errorLoadingProducts,
        productsAddedToCart,
        handleChangeOptionOfSortByFilter,
        handleSearchProductByName,
        searchProductName,
        productsPerPage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

const useProductsContext = (): ProductsContextValue => {
  return useContext(ProductsContext)
}

export { ProductsProvider, useProductsContext }
