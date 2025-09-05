import styled from "@emotion/styled"

import { FontSizes, FontWeights } from "../../../../constants/fonts"
import { Breakpoints } from "../../../../constants/breakpoints"

export const Title = styled.h1<{uppercase: boolean}>`
  font-size: ${FontSizes.H1_MOBILE};
  font-weight: ${FontWeights.EXTRA_BOLD};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
  text-align: center;

  @media(min-width: ${Breakpoints.MOBILE}) {
    font-size: ${FontSizes.H1};
  }
`