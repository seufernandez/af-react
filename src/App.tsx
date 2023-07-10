import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/header'
import { ProductsSection } from './components/ProductsSection'
import { ProductsProvider } from './hooks/useProduct'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/auth/react-query'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Header />

          <ProductsSection />
        </ThemeProvider>
      </ProductsProvider>
    </QueryClientProvider>
  )
}
