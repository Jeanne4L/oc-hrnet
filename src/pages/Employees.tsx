
import { useEmployees } from "../contexts/EmployeesContext"
import { withHeader } from "../hoc/withHeader"

const EmployeesPage = () => {
  const { employees } = useEmployees()
  console.log(employees)
  
  return (
    <div>EmployeesPage</div>
  )
}

export default withHeader(EmployeesPage)