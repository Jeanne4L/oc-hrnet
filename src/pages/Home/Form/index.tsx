import { useState } from "react"

import { emptyInputsError, InputsErrorType } from "../../../types/errors"
import AddressSection from "./Address"
import JobSection from "./Job"
import PersonalDetailsSection from "./PersonalDetailsSection"
import { checkInputValue } from "./helpers/checkInputValue"

const Form = () => {
  const [inputsError, setInputsError] = useState<InputsErrorType>(emptyInputsError)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target

    setInputsError({
      ...inputsError,
      [name]: checkInputValue(value, type)
    })
  }

  return (
    <>
      <PersonalDetailsSection inputsError={inputsError} handleChange={handleChange} />
      <AddressSection inputsError={inputsError} handleChange={handleChange} />
      <JobSection />
    </>
  )
}

export default Form