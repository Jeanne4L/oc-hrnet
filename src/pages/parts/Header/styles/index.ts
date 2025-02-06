import styled from "@emotion/styled"

import { Breakpoints } from "../../../../constants/breakpoints"
import { Colors } from "../../../../constants/colors"
import { FontWeights } from "../../../../constants/fonts"
import { Margins } from "../../../../constants/margins"
import { Paddings } from "../../../../constants/paddings"

export const HeaderContent = styled.div`
  width: 100%;
  max-width: ${Breakpoints.MAX_WIDTH};
  margin: auto;
  padding: ${Paddings.P3};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const List = styled.ul`
  display: flex;
  gap: ${Margins.M1}
`

export const Li = styled.li<{isCurrent?: boolean, isDisabled?: boolean}>`
  list-style-type: none;
  color: ${props => props.isCurrent ? Colors.YELLOW : Colors.WHITE_TEXT};
  font-weight: ${props => props.isCurrent ? FontWeights.SEMI_BOLD : FontWeights.REGULAR};
  opacity: ${props => props.isCurrent ? 1 : 0.7};
  cursor: ${props => (props.isCurrent || props.isDisabled) ? 'auto' : 'pointer'};
  pointer-events: ${props => props.isCurrent ? 'none' : 'auto'};
`
