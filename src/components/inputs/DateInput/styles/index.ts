import { CSSProperties } from "react"
import styled from "@emotion/styled"

import { Margins } from "../../../../constants/margins"
import { FontSizes, FontWeights } from "../../../../constants/fonts"
import { Paddings } from "../../../../constants/paddings"
import { BorderRadius } from "../../../../constants/borderRadius"
import { Colors } from "../../../../constants/colors"

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Margins.M1};
  position: relative;
`

export const Label = styled.label`
  font-weight: ${FontWeights.THIN};
  opacity: 0.7;
`

export const datePickerStyle: CSSProperties = {
  padding: Paddings.P2,
  borderRadius: BorderRadius.INPUT,
  border: `solid 1px ${Colors.BLUE}`,
  backgroundColor: Colors.TRANSPARENT_BLUE,
  fontSize: FontSizes.TEXT,
  width: '100%',
  height: '54px'
}

export const errorStyle: CSSProperties = {
  color: Colors.RED_ALERT
}