import styled from "@emotion/styled"

import { Colors } from "../../../constants/colors"
import { Margins } from "../../../constants/margins"
import { Breakpoints } from "../../../constants/breakpoints"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px ${Colors.YELLOW};
  border-radius: 50px;
  width: 56px;
  height: 56px;
  margin: ${Margins.M1} auto;
  cursor: pointer;

  @media(min-width: ${Breakpoints.MOBILE}) {
    margin: ${Margins.M4} auto;
  }
`