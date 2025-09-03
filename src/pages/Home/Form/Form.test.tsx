import { BrowserRouter } from "react-router-dom"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import axios from "axios"

import EmployeesProvider from "../../../contexts/EmployeesContext"
import Form from "."

const mockStates = ["New York", "California"]

vi.mock("../../../hooks/useStatesData", () => {
  return {
    useStatesData: () => ({
      states: mockStates,
      loading: false,
      error: null,
    }),
  }
})

describe('Form', () => {
  beforeEach(() => {
    vi.spyOn(localStorage, 'getItem')
    vi.spyOn(localStorage, 'setItem')

    render(
      <BrowserRouter>
        <EmployeesProvider>
          <Form />
        </EmployeesProvider>
      </BrowserRouter>
    )
  })
  
  afterEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
  })

  test.each(['Personal details', 'Address', 'Job'])(
    'should contains the section %s', (sectionName) => {
      const section = screen.getByText(sectionName)

      expect(section).toBeTruthy()
    }
  )

  // DISPLAY ERROR
  const stringError = 'The format is incorrect'
  const stateError = 'Please select a valid state'
  const departmentError = 'Please select a valid department'

  const invalidValues = {
    'firstName': ['12345', stringError],
    'lastName': ['12345', stringError],
    'street': ['@12345', stringError],
    'city': ['12345', stringError],
    'zipCode': ['1234a', stringError],
    'state': ['12345', stateError],
    'department': ['12345', departmentError]
  }

  type InvalidInput = keyof typeof invalidValues

  test.each(Object.keys(invalidValues) as InvalidInput[])(
    'should return an error if the input value is invalid',
    async (input) => {
      const inputField = screen.getByTestId(input)
      const value = invalidValues[input][0]
      const error = invalidValues[input][1]

      fireEvent.change(inputField, { target: { value } })
      fireEvent.blur(inputField)

      expect(await screen.findByText(error)).toBeTruthy()
    }
  )

  // INPUT VALUE VALIDATION
  const validValues = {
    'firstName': ['John', stringError],
    'lastName': ['Doe', stringError],
    'street': ['123 Main St', stringError],
    'city': ['New York City', stringError],
    'zipCode': ['10001', stringError],
    'state': ['New York', stateError],
    'department': ['Sales', departmentError]
  }

  type ValidInput = keyof typeof validValues

  test.each(Object.keys(validValues) as ValidInput[])(
    'should not return an error if the input value is valid',
    async (input) => {
      const inputField = screen.getByTestId(input)
      const value = validValues[input][0]

      fireEvent.change(inputField, { target: { value } })
      fireEvent.blur(inputField)

      
      await waitFor(() => {
        const error = screen.queryByText(validValues[input][1])
        expect(error).toBeNull()
      })
    }
  )

  // PRE-FILLING FIELDS
  test('should display city and state related to the ZIP code', async () => {
    const zipInput = screen.getByTestId('zipCode')

    const axiosSpy = vi.spyOn(axios, 'get')

    axiosSpy.mockResolvedValue({ data: {
      "post code": "10001",
      "places": [
        {
          "place name": "New York City",
          "state": "New York"
        }
      ]
    }})

    fireEvent.change(zipInput, { target: { value: '10001' } })
  
    expect(screen.findByDisplayValue('New York City')).toBeTruthy()
    expect(screen.findByDisplayValue('New York')).toBeTruthy()
  })

  // SUBMIT FORM
  test('submit valid form, create a new employee', async () => {
    const firstNameInput = screen.getByTestId('firstName')
    fireEvent.change(firstNameInput, { target: { value: 'John' } })

    const lastNameInput = screen.getByTestId('lastName')
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } })

    const birthDateInput = screen.getByTestId('birthDate')
    fireEvent.change(birthDateInput, { target: { value: '1980-05-03' } })

    const streetInput = screen.getByTestId('street')
    fireEvent.change(streetInput, { target: { value: '123 Main St' } })

    const zipCodeInput = screen.getByTestId('zipCode')
    fireEvent.change(zipCodeInput, { target: { value: '10001' } })

    const cityInput = screen.getByTestId('city')
    fireEvent.change(cityInput, { target: { value: 'New York City' } })

    const stateInput = screen.getByTestId('state')
    fireEvent.change(stateInput, { target: { value: 'New York' } })

    const startDateInput = screen.getByTestId('startDate')
    fireEvent.change(startDateInput, { target: { value: '2020-05-03' } })

    const departmentInput = screen.getByTestId('department')
    fireEvent.change(departmentInput, { target: { value: 'Sales' } })

    const submitButton = screen.getByTestId('submit')
    fireEvent.click(submitButton)

    const mockedEmployees = [
      {
        firstName: 'John',
        lastName: 'Doe',
        street: '123 Main St',
        city: 'New York City',
        zipCode: '10001',
        state: 'New York',
        department: 'Sales',
        birthDate: '1980-05-03',
        startDate: '2020-05-03'
      }
    ]

    await waitFor(() => {
      const modal = screen.getByTestId('successModal')
      expect(modal).toBeTruthy()

      const savedEmployees = localStorage.getItem('employees')
      const parsedEmployees = savedEmployees ? JSON.parse(savedEmployees) : []
      expect(parsedEmployees).toEqual(mockedEmployees)
    })
  })
})
