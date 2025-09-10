import { ReactNode } from "react"

import Header from "../../pages/parts/Header"
import { Main } from "./styles"

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps ) => {
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
    </>
  )
}

export default Layout