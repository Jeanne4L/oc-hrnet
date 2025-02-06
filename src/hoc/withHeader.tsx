import { ComponentType } from "react"

import Header from "../pages/parts/Header"

export const withHeader = (Component: ComponentType) => {
  return (props: any) => (
    <>
      <Header />
      <Component {...props} />
    </>
  )
}