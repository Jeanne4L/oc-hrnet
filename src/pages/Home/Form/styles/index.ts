import { CSSProperties } from "react"
import styled from "@emotion/styled"

import { Margins } from "../../../../constants/margins"
import { Colors } from "../../../../constants/colors"
import { Breakpoints } from "../../../../constants/breakpoints"

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${Margins.M5};
  width: 100%;
  max-width: 600px;
  margin: auto;

  @media(min-width: ${Breakpoints.MOBILE}) {
    gap: ${Margins.M8};
  }
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Margins.M4};
  width: 100%;
`

export const FormPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Margins.M4};
`

export const errorStyle: CSSProperties = {
  color: Colors.RED_ALERT,
  textAlign: 'center'
}