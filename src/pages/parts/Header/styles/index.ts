import styled from "@emotion/styled"

import { Breakpoints } from "../../../../constants/breakpoints"
import { Colors } from "../../../../constants/colors"
import { FontSizes, FontWeights } from "../../../../constants/fonts"
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

export const Nav = styled.div`
  display: flex;
  gap: ${Margins.M1}
`

export const NavLink = styled.span<{isCurrent?: boolean, isDisabled?: boolean}>`
  color: ${props => props.isCurrent ? Colors.YELLOW : Colors.WHITE_TEXT};
  font-size: ${FontSizes.HEADER_LINK};
  text-transform: uppercase;
  opacity: ${props => props.isCurrent ? 1 : 0.7};
  cursor: ${props => (props.isCurrent || props.isDisabled) ? 'auto' : 'pointer'};
  pointer-events: ${props => props.isCurrent ? 'none' : 'auto'};
`
