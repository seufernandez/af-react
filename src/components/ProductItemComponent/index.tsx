import { Product, useProductsContext } from '../../hooks/useProduct'
import { useRef, useState } from 'react'
import {
  ProductItem,
  ProductImage,
  ProductTitle,
  ProductRating,
  ProductPrice,
  ProductAmount,
  AddProductToCartButton,
} from './styles'
import ReactStars from 'react-rating-star-with-type'
import { CheckIcon } from '@radix-ui/react-icons'

interface ProductItemComponentProps {
  product: Product
}

export function ProductItemComponent({ product }: ProductItemComponentProps) {
  const { AddProductToCart } = useProductsContext()
  const [clicked, setClicked] = useState<boolean>(false)

  const handleClickAnimation = () => {
    setClicked((prev: boolean) => !prev)
    setTimeout(() => {
      setClicked((prev: boolean) => !prev)
    }, 1000)
  }

  const amountRef = useRef<HTMLInputElement | null>(null)

  function handleAddToCart() {
    handleClickAnimation()

    if (typeof amountRef?.current?.value !== 'string') {
      return alert('Error adding product')
    }

    AddProductToCart({
      productId: product.id,
      productAmount: parseInt(amountRef?.current?.value),
      productPrice: product.price,
    })
  }

  return (
    <ProductItem key={product.id}>
      <ProductImage src={product.image.url} alt=""></ProductImage>
      <ProductTitle>{product.name}</ProductTitle>

      <ProductRating>
        <ReactStars
          value={product.rating}
          isEdit={false}
          inactiveColor="#FB8200"
          activeColor="#FB8200"
        />

        <span className="rating-number">
          {parseFloat(product.rating.toFixed(1))}
        </span>
      </ProductRating>

      <section>
        <ProductPrice>
          {(product.price / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </ProductPrice>
        <ProductAmount ref={amountRef} type="number" defaultValue="1" min="1" />
      </section>

      <AddProductToCartButton onClick={handleAddToCart} disabled={clicked}>
        {clicked ? (
          <>
            <CheckIcon />
            Added
          </>
        ) : (
          'Add to cart'
        )}
      </AddProductToCartButton>
    </ProductItem>
  )
}
