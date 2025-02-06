import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import { Colors } from "../../../constants/colors"
import Header from "."

Object.defineProperty(window, 'location', {
  value: { pathname: '/' },
  writable: true,
})

describe('Header', () => {
  it('contains a logo and other pages links', () => {
    render(<Header />) 

    const logo = screen.getByTestId('logo')

    expect(logo).toBeTruthy()
    expect(screen.getByText(/Create/)).toBeTruthy()
    expect(screen.getByText(/Employees/)).toBeTruthy()
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