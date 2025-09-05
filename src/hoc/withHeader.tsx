import { ComponentType } from "react"

import Header from "../pages/parts/Header"
import { Main } from "./styles"

export const withHeader = (Component: ComponentType) => {
  return (props: any) => (
    <>
      <Header />
      <Main>
        <Component {...props} />
      </Main>
    </>
  )
}