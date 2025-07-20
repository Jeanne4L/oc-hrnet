import { Column, Table } from 'octable'

import { useEmployees } from "../contexts/EmployeesContext"
import { withHeader } from "../hoc/withHeader"
import H1 from '../components/text/H1'
import { Colors } from '../constants/colors'
import { EmployeeType } from '../types/employees'
import PageContainer from './parts/PageContainer'

const columns: Column<EmployeeType>[] = [
  {
    id: 'firstName',
    name: 'First name'
  },
  {
    id: 'lastName',
    name: 'Last name'
  },
  {
    id: 'birthDate',
    name: 'Birth date'
  },
  {
    id: 'street',
    name: 'Street'
  },
  {
    id: 'city',
    name: 'City'
  },
  {
    id: 'zipCode',
    name: 'Zip code'
  },
  {
    id: 'state',
    name: 'State'
  },
  {
    id: 'department',
    name: 'Department'
  },
  {
    id: 'startDate',
    name: 'Start date'
  },
]

const EmployeesPage = () => {
  const { employees } = useEmployees()

  const tableArgs = {
    data: employees,
    columns,
    accentColor: '#1D5A73',
    borderColor: 'transparent',
    textColor: Colors.WHITE_TEXT,
    headerBg: 'rgba(29, 90, 115, 0.6)',
    rowBg: 'rgba(29, 90, 115, 0.2)',
    entriesSelectOptions: [4, 10, 50]
  }
  
  return (
    <PageContainer>
      <H1 text='Employees' uppercase />

      <Table {...tableArgs}>
        <Table.Toolbar>
          <Table.EntriesSelector />
          <Table.SearchBar />
        </Table.Toolbar>
        <Table.Content>
          <Table.Head />
          <Table.Body />
        </Table.Content>
        <Table.Pagination />
      </Table>
    </PageContainer>
  )
}

export default withHeader(EmployeesPage)