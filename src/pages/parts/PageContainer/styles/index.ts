import styled from "@emotion/styled"

import { Margins } from "../../../../constants/margins"
import { Breakpoints } from "../../../../constants/breakpoints"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Margins.M5};


  @media(min-width: ${Breakpoints.MOBILE}) {
    gap: ${Margins.M10};
  }
`