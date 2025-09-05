import styled from "@emotion/styled"

import { Colors } from "../../../constants/colors"
import { Paddings } from "../../../constants/paddings"
import { FontSizes, FontWeights } from "../../../constants/fonts"
import { BorderRadius } from "../../../constants/borderRadius"

export const ButtonContainer = styled.button<{variant: 'primary' | 'secondary'}>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.variant === 'primary' 
    ? Colors.DARK_BLUE
    : Colors.YELLOW
  };
  background-color: ${props => props.variant === 'primary' 
    ? Colors.YELLOW
    : 'transparent'
  };
  outline: none;
  border: solid 2px ${Colors.YELLOW};
  border-radius: ${BorderRadius.INPUT};
  min-width: 95px;
  padding: ${Paddings.P2};
  text-transform: uppercase;
  font-size: ${FontSizes.HEADER_LINK};
  font-weight: ${FontWeights.SEMI_BOLD};
  cursor: pointer;
  transition: transform 200ms;

  &:hover {
    transform: scale(1.02);
  }

  &:focus {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.95);
  }
`