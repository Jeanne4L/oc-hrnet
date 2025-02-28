export type EmployeeType = {
  firstName: string
  lastName: string
  street: string
  city: string
  zipCode: string
  state: string
  department: string
  birthDate: Date | string
  startDate: Date | string
}

export type EmployeesType = EmployeeType[]

export const emptyEmployee = {
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  zipCode: '',
  state: '',
  department: '',
  birthDate: '',
  startDate: ''
}
