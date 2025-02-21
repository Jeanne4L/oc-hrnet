import { beforeEach, describe, expect, test } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import Form from "."

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
    'should return an error if the value is not a string', (inputLabel) => {
      const input = screen.getByLabelText(inputLabel)
      const error = 'This field must only contain letters'

      fireEvent.change(input, { target: { value: '1234' } })

      expect(screen.getByText(error)).toBeTruthy()
    }
  )
})