import { useState, useEffect } from 'react'
import { HeaderContainer, LogoImg, MenuButton, MenuIcon } from './styles'
import { CartButton } from '../CartButton'
import { SearchBar } from './../SearchBar/index'

export function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches
      setIsMobile(isMobile)
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (isMobile) {
    return (
      <>
        <HeaderContainer>
          <SearchBar />

          <MenuButton>
            <MenuIcon></MenuIcon>
          </MenuButton>
        </HeaderContainer>
        <CartButton isMobile={true} />
      </>
    )
  }

  return (
    <HeaderContainer>
      <LogoImg>Logo</LogoImg>

      <SearchBar />

      <CartButton />
    </HeaderContainer>
  )
}
