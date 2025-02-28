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

export const Input = styled.input`
  padding: ${Paddings.P2};
  border-radius: ${BorderRadius.INPUT};
  border: solid 1px ${Colors.BLUE};
  background-color: ${Colors.TRANSPARENT_BLUE};
  font-size: ${FontSizes.TEXT};
  
  &:focus {
    outline: none;
    border-color: ${Colors.YELLOW}; 
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
    width: 16px;
    outline: none;
    
    &:focus {
      filter: brightness(0) saturate(100%) invert(99%) sepia(38%) saturate(6402%) hue-rotate(323deg) brightness(98%) contrast(93%);
    }
  }
`

export const errorStyle: CSSProperties = {
  color: Colors.RED_ALERT
}