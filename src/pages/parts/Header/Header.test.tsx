import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import { Colors } from "../../../constants/colors"
import Header from "."
import { useNavigate } from "react-router-dom"

Object.defineProperty(window, 'location', {
  value: { pathname: '/' },
  writable: true,
})

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn()
}))

describe('Header', () => {
  it('contains a logo and other pages links', () => {
    render(<Header />) 

    const logo = screen.getByTestId('logo')

    expect(logo).toBeTruthy()
    expect(screen.getByText(/Create/)).toBeTruthy()
    expect(screen.getByText(/Employees/)).toBeTruthy()
  })

  it.only('should navigate to the correct page when links are clicked', () => {
    const mockNavigate = jest.fn()
    ;(useNavigate as jest.Mock).mockReturnValue(mockNavigate)

    render(<Header />)

    const createLink = screen.getByText(/Create/)
    fireEvent.click(createLink)

    expect(mockNavigate).toHaveBeenCalledWith('/')

    const employeesLink = screen.getByText(/Employees/)
    fireEvent.click(employeesLink)

    expect(mockNavigate).toHaveBeenCalledWith('/employees')
  })

  it.each([
    ['/', 'Create', Colors.YELLOW], 
    ['/employees', 'Employees', Colors.YELLOW]
  ])(
    'should apply yellow color for %s item when pathname is %s',
    (pathname, text, expectedColor) => {
      window.location.pathname = pathname

      render(<Header />)

      const item = screen.getByText(text)

      expect(item).toHaveStyle(`color: ${expectedColor}`)
    }
  )
})