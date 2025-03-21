import { beforeEach, describe, expect, test, vi } from "vitest"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"

import Form from "."
import axios from "axios"

describe('Form', () => {
  beforeEach(() => {
    render(<Form />)
  })

  test.each(['Personal details', 'Address', 'Job'])(
    'should contains the section %s', (sectionName) => {
      const section = screen.getByText(sectionName)

      expect(section).toBeTruthy()
    }
  )

  test.each(['First name', 'Last name', 'Street', 'City'])(
    'should return an error if the input value is not a string', (inputLabel) => {
      const input = screen.getByLabelText(inputLabel)
      const error = 'This field must only contain letters'

      fireEvent.change(input, { target: { value: '1234' } })

      expect(screen.getByText(error)).toBeTruthy()
    }
  )

  test('should return an error if the zip code value is incorrect', () => {
      const input = screen.getByLabelText(/Zip code/)
      const error = 'The format is incorrect'
 
      fireEvent.change(input, { target: { value: 'zip' } })

      expect(screen.getByText(error)).toBeTruthy()
    }
  )

  test('should display city and state related to the ZIP code', async () => {
    const zipInput = screen.getByLabelText(/Zip code/)

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
  
    await waitFor(() => {
      expect(screen.findByDisplayValue("New York City")).toBeTruthy()
      expect(screen.findByDisplayValue("New York")).toBeTruthy()
    })
  })
})