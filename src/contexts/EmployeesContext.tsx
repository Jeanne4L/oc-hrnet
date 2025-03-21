import { createContext, ReactNode, useContext, useEffect, useState } from "react"

import { EmployeesType } from "../types/employees"

type EmployeesContextType = {
  employees: EmployeesType
  setEmployees: (employees: EmployeesType) => void
}

export const EmployeesContext = createContext<EmployeesContextType>({
  employees: [],
  setEmployees: () => {}
})

const EmployeesProvider = ({ children }: { children: ReactNode }) => {
  const [employees, setEmployees] = useState<EmployeesType>(() => {
    const savedEmployees = localStorage.getItem('employees')
    return savedEmployees ? JSON.parse(savedEmployees) : []
  })

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees])

  return (
    <EmployeesContext.Provider value={{employees, setEmployees}}>
      {children}
    </EmployeesContext.Provider>
  )
}

export default EmployeesProvider

export const useEmployees = () => {
  const context = useContext(EmployeesContext)

  if (!context) {
    throw new Error('No context')
  }

  return context
}