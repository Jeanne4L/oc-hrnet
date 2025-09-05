import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, test, vi } from "vitest"

import { EmployeesPage } from "."

vi.mock("../../contexts/EmployeesContext", () => ({
  useEmployees: () => ({
    employees: [
      { firstName: 'John', lastName: 'Doe', birthDate: '1990-01-01', street: '123 Main St', city: 'Anytown', zipCode: '12345', state: 'CA', department: 'Sales', startDate: '2020-01-01' }
    ]
  })
}))

vi.mock("../../hoc/withHeader", () => ({
  withHeader: (Component: any) => {
    return () => <Component />
  },
}))

describe('Employees Page', () => {
  beforeEach(() => {
    render(<EmployeesPage />)
  })

  test('contains the title "Employees"', () => {
    const title = screen.getByText('Employees')
    expect(title).toBeTruthy()
  })

  test('renders the mocked table', () => {
    const table = screen.getByRole('table')
    expect(table).toBeTruthy()
  })

  test('displays employee data from the mocked hook', () => {
    expect(screen.getByText('John')).toBeTruthy()
    expect(screen.getByText('Doe')).toBeTruthy()
  })
})