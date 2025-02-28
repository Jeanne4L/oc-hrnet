import H2 from "../../../../components/text/H2"
import DateInput from "../../../../components/inputs/DateInput"
import TextInput from "../../../../components/inputs/TextInput"
import { InputsErrorType } from "../../../../types/errors"
import { FormContent, FormPart } from "../styles"

type PersonalDetailsProps = {
  inputsError: InputsErrorType
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const PersonalDetailsSection = ({ inputsError, handleChange }: PersonalDetailsProps) => {
  const today = new Date().toISOString().split('T')[0]

  return (
    <FormPart>
      <H2 text='Personal details' />
      <FormContent>
        <TextInput inputId='firstName' label='First name' error={inputsError.firstName} onChange={handleChange} />
        <TextInput inputId='lastName' label='Last name' error={inputsError.lastName} onChange={handleChange} />
        <DateInput inputId='birthDate' label='Date of birth' error={inputsError.birthDate} onChange={handleChange} maxDate={today} />
      </FormContent>
    </FormPart>
  )
}

export default PersonalDetailsSection