import styled from "@emotion/styled"

import { FontSizes, FontWeights } from "../../../../constants/fonts"
import { Breakpoints } from "../../../../constants/breakpoints"

export const Title = styled.h2`
  font-size: ${FontSizes.H2_MOBILE};
  font-weight: ${FontWeights.EXTRA_BOLD};
  text-align: center;

  @media(min-width: ${Breakpoints.MOBILE}) {
    font-size: ${FontSizes.H2};
  }
`