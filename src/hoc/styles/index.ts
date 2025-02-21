import styled from "@emotion/styled"

import { Breakpoints } from "../../constants/breakpoints"
import { Paddings } from "../../constants/paddings"

export const Main = styled.main`
  width: 100%;
  max-width: ${Breakpoints.MAX_WIDTH};
  margin: auto;
  padding: ${Paddings.P3};
`