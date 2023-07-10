import * as Select from '@radix-ui/react-select'
import { styled } from 'styled-components'

export const SelectFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1rem 0;

  span {
    color: ${(props) => props.theme['gray-700']};
  }
`

export const SelectTrigger = styled(Select.SelectTrigger)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 13px;
  line-height: 1;
  height: 35px;
  width: 6rem;
  gap: 5px;

  background-color: ${(props) => props.theme['gray-100']};
  margin-left: 1rem;
  /* 
  &:focus {
    box-shadow: 0 0 0 2px black;
  } */
  /* &[data-placeholder] {
  } */
`

export const SelectIcon = styled(Select.SelectIcon)``

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  background-color: ${(props) => props.theme.white};
`

export const SelectViewport = styled(Select.Viewport)`
  padding: 5px;
`

export const StyledItem = styled(Select.Item)`
  font-size: 13px;
  line-height: 1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;

  &[data-disabled] {
    pointer-events: none;
  }

  &[data-highlighted] {
    outline: none;
  }
`

export const SelectLabel = styled(Select.Label)`
  padding: 0 25px;
  font-size: 12px;
  line-height: 25px;
`

export const SelectSeparator = styled(Select.Separator)`
  height: 1px;
  margin: 5px;
`

export const StyledItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`
