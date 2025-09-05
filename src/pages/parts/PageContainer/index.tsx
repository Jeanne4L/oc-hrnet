import { ReactNode } from "react"

import { Container } from "./styles"

type PageContainerProps = {
  children: ReactNode
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Container>{children}</Container>
  )
}

export default PageContainer