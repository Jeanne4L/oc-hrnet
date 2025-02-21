import { describe, expect, test, vi } from 'vitest'
import { useNavigate } from "react-router-dom"
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react"

import { Colors } from "../../../constants/colors"
import Header from "."

Object.defineProperty(window, 'location', {
  value: { pathname: '/' },
  writable: true,
})

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useNavigate: vi.fn()
}))

describe('Header', () => {
  test('contains a logo and other pages links', () => {
    render(<Header />) 

    const logo = screen.getByTestId('logo')

    expect(logo).toBeTruthy()
    expect(screen.getByText(/Create/)).toBeTruthy()
    expect(screen.getByText(/Employees/)).toBeTruthy()
  })

  test('should navigate to the correct page when links are clicked', () => {
    const mockNavigate = vi.fn()
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)

    render(<Header />)

    const createLink = screen.getByText(/Create/)
    fireEvent.click(createLink)

    expect(mockNavigate).toHaveBeenCalledWith('/')

    const employeesLink = screen.getByText(/Employees/)
    fireEvent.click(employeesLink)

    expect(mockNavigate).toHaveBeenCalledWith('/employees')
  })

  test.each([
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