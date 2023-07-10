import { ReactNode, forwardRef } from 'react'
import * as Select from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'
import {
  SelectContent,
  SelectFilterContainer,
  SelectIcon,
  SelectTrigger,
  SelectViewport,
  StyledItem,
  StyledItemIndicator,
} from './styles'
import { useProductsContext } from '../../hooks/useProduct'

const SelectItem = forwardRef<
  HTMLDivElement,
  { value: string; children: ReactNode }
>(function SelectItem({ value, children, ...props }, forwardedRef) {
  return (
    <StyledItem value={value} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <StyledItemIndicator>
        <CheckIcon />
      </StyledItemIndicator>
    </StyledItem>
  )
})

export function ProductsFilter() {
  const { handleChangeOptionOfSortByFilter } = useProductsContext()

  return (
    <Select.Root
      defaultValue="_publishedAt_DESC"
      onValueChange={(
        value: 'rating_DESC' | 'price_DESC' | '_publishedAt_DESC',
      ) => handleChangeOptionOfSortByFilter(value)}
    >
      <SelectFilterContainer>
        <span>Sort by:</span>
        <SelectTrigger aria-label="sortby">
          <Select.Value placeholder="" />
          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>

        <Select.Portal>
          <SelectContent>
            <SelectViewport>
              <Select.Group>
                <SelectItem value="_publishedAt_DESC">Latest</SelectItem>
                <SelectItem value="rating_DESC">Top Rated</SelectItem>
                <SelectItem value="price_DESC">$$ {'>'} $</SelectItem>
              </Select.Group>
            </SelectViewport>
          </SelectContent>
        </Select.Portal>
      </SelectFilterContainer>
    </Select.Root>
  )
}
