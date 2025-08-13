import { CSSProperties } from "react"
import styled from "@emotion/styled"

import { Paddings } from "../../../../constants/paddings"
import { BorderRadius } from "../../../../constants/borderRadius"
import { Colors } from "../../../../constants/colors"

export const DropdownContainer = styled.div`
  position: relative;
`

export const InputContainer = styled.div`
  position: relative;
`

export const Options = styled.ul<{isOpen: boolean}>`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.BLUE};
  border-radius: ${BorderRadius.INPUT};
  padding:  ${props => props.isOpen ? Paddings.P2 : 0};
  position: absolute;
  top: 86px;
  left: 0;
  right: 0;
  z-index: 100;
  transition: height 200ms;
  max-height: ${props => props.isOpen ? '188px' : '0'};
  overflow-y: ${props => props.isOpen ? 'scroll' : 'hidden'};

  ::-webkit-scrollbar-thumb {
    background: ${Colors.WHITE_TEXT};
  }
`

export const OptionLi = styled.li<{isNotClickable?: boolean}>`
  list-style-type: none;
  padding: ${Paddings.P2};
  border-radius: ${BorderRadius.INPUT};
  color: ${Colors.WHITE_TEXT};
  pointer-events: ${props => props.isNotClickable ? 'none' : 'auto'};
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: rgba(1,24,38, 0.2)
  }

  &:focus {
    background-color: rgba(1,24,38, 0.2)
  }
`

export const chevronStyle: CSSProperties = {
  padding: Paddings.P2,
  cursor: 'pointer',
  position: 'absolute',
  top: '32px',
  right: '0'
}