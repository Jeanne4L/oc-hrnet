import H2 from "../../../../components/text/H2"
import TextInput from "../../../../components/inputs/TextInput"
import { InputsErrorType } from "../../../../types/errors"
import { FormContent } from "../styles"

type PersonalDetailsProps = {
  inputsError: InputsErrorType
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const PersonalDetailsSection = ({ inputsError, handleChange }: PersonalDetailsProps) => {
  return (
    <>
      <H2 text='Personal details' />
      <FormContent>
        <TextInput inputId='firstName' label='First name' error={inputsError.firstName} onChange={handleChange} />
        <TextInput inputId='lastName' label='Last name' error={inputsError.lastName} onChange={handleChange} />
      </FormContent>
    </>
  )
}

export default PersonalDetailsSection