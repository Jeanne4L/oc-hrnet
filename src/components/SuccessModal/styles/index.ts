import { CSSProperties } from "react"
import styled from "@emotion/styled"

import { Colors } from "../../../constants/colors"
import { Margins } from "../../../constants/margins"
import { Breakpoints } from "../../../constants/breakpoints"
import { Paddings } from "../../../constants/paddings"
import { BorderRadius } from "../../../constants/borderRadius"

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.OVERLAY};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div`
  background-color: ${Colors.BLUE};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${Margins.M3};
  width: 100%;
  max-width: 425px;
  height: 100vh;
  padding: ${Paddings.P3};
  border-radius: ${BorderRadius.INPUT};

  @media(min-width: ${Breakpoints.MOBILE}) {
    height: fit-content;
  }
`

export const closeButtonStyle: CSSProperties = {
  cursor: 'pointer'
}

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Margins.M3};
  width: 100%;
`