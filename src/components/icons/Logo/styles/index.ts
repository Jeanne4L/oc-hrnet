import styled from "@emotion/styled"

import { Breakpoints } from "../../../../constants/breakpoints"

export const LogoText = styled.path`
  display: none;

  @media(min-width: ${Breakpoints.MOBILE}){
    display: block;
  }
`