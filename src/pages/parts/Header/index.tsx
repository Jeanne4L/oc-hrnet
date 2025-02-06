import { useEffect, useState } from "react"

import Logo from "../../../components/icons/Logo"
import { List, Li, HeaderContent } from "./styles"

const Header = () => {
  const [currentPage, setCurrentPage] = useState<string | null>(null)

  const pathname = window.location.pathname

  useEffect(() => {
    if(pathname == '/') {
      setCurrentPage('home')
    } else if(pathname == '/employees') {
      setCurrentPage('employees')
    }
  }, [pathname])
  
  return (
    <header>
      <HeaderContent>
        <Logo/>

        <List>
          <Li isCurrent={currentPage === 'home'}>Create</Li>
          <Li isDisabled>\</Li>
          <Li isCurrent={currentPage === 'employees'}>Employees</Li>
        </List>
      </HeaderContent>
    </header>
  )
}

export default Header