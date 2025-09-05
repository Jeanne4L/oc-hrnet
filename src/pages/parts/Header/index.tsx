import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Logo from "../../../components/icons/Logo"
import { HeaderContent, Nav, NavLink } from "./styles"

const Header = () => {
  const [currentPage, setCurrentPage] = useState<string | null>(null)

  const navigate = useNavigate()

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
        <Logo onClick={() => navigate('/')} />

        <Nav>
          <NavLink isCurrent={currentPage === 'home'} onClick={() => navigate('/')}>Create</NavLink>
          <>\</>
          <NavLink isCurrent={currentPage === 'employees'} onClick={() => navigate('/employees')}>Employees</NavLink>
        </Nav>
      </HeaderContent>
    </header>
  )
}

export default Header