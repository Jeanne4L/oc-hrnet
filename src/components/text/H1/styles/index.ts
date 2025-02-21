import styled from "@emotion/styled"

import { FontSizes, FontWeights } from "../../../../constants/fonts"

export const Title = styled.h1<{uppercase: boolean}>`
  font-size: ${FontSizes.H1};
  font-weight: ${FontWeights.EXTRA_BOLD};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
  text-align: center;
`