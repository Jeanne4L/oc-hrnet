import styled from "@emotion/styled"

import { FontSizes } from "../../../../constants/fonts"

export const Paragraph = styled.p<{fontSize: FontSizes}>`
  font-size: ${props => props.fontSize};
`