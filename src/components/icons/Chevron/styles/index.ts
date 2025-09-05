import styled from "@emotion/styled"

import { Colors } from "../../../../constants/colors"

export const Svg = styled.svg<{isReturned: boolean}>`
  transform: ${props => props.isReturned ? 'rotate(180deg)' : 'none'};
  transition: transform 200ms;
  outline: none;

  &:focus > path {
    fill: ${Colors.YELLOW}
  }
`