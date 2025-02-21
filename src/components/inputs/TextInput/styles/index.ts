import { CSSProperties } from "react"
import styled from "@emotion/styled"

import { Margins } from "../../../../constants/margins"
import { FontWeights } from "../../../../constants/fonts"
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
  font-weight: ${FontWeights.THIN}
`

export const Input = styled.input`
  padding: ${Paddings.P2};
  border-radius: ${BorderRadius.INPUT};
  border: solid 1px ${Colors.BLUE};
  background-color: ${Colors.TRANSPARENT_BLUE};

  &:focus {
    outline: none;
    border-color: ${Colors.YELLOW}; 
  }
`

export const errorStyle: CSSProperties = {
  color: Colors.RED_ALERT
}