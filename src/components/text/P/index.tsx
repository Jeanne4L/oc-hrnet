import { CSSProperties, ReactNode } from "react"

import { FontSizes } from "../../../constants/fonts"
import { Paragraph } from "./styles"

type PProps = {
  children: ReactNode
  fontSize?: FontSizes
  style?: CSSProperties
}

const P = ({ fontSize = FontSizes.TEXT, children, style }: PProps) => {
  return (
    <Paragraph fontSize={fontSize} style={style}>{children}</Paragraph>
  )
}

export default P