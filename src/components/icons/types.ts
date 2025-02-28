import { CSSProperties } from "react"

import { Colors } from "../../constants/colors"

export type IconProps = {
  width?: string
  height?: string
  color?: Colors
  style?: CSSProperties
  onClick?: () => void
}