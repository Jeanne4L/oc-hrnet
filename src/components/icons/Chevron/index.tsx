import { RefObject } from "react"

import { Colors } from "../../../constants/colors"
import { IconProps } from "../types"
import { Svg } from "./styles"

type ChevronProps = IconProps & {
  isReturned?: boolean
  tabIndex?: 0 | -1
  onKeyDown?: (event: React.KeyboardEvent<SVGSVGElement>) => void
  ref?: RefObject<SVGSVGElement | null>
}

const ChevronIcon = ({
  width='16px',
  height='10px',
  color=Colors.WHITE_TEXT,
  tabIndex=-1,
  style,
  isReturned = false,
  ref,
  onClick,
  onKeyDown,
}: ChevronProps) => {
  return (
    <Svg width={width} height={height} onClick={onClick} style={style} isReturned={isReturned} tabIndex={tabIndex} onKeyDown={onKeyDown} ref={ref} viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.74 1.31056C15.9065 1.13669 16 0.901009 16 0.655279C16 0.409548 15.9065 0.173866 15.74 0H0.259984C0.0935077 0.173866 0 0.409548 0 0.655279C0 0.901009 0.0935077 1.13669 0.259984 1.31056L7.37179 8.72881C7.53847 8.90246 7.76442 9 8 9C8.23558 9 8.46153 8.90246 8.62821 8.72881L15.74 1.31056Z" fill={color}/>
    </Svg>
  )
}

export default ChevronIcon