import H2 from "../../../../components/text/H2"
import TextInput from "../../../../components/inputs/TextInput"
import { InputsErrorType } from "../../../../types/errors"
import { FormContent } from "../styles"

type AddressProps = {
  inputsError: InputsErrorType
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AddressSection = ({ inputsError, handleChange }: AddressProps) => {
  return (
    <>
      <H2 text='Address' />

      <FormContent>
        <TextInput inputId='street' label='Street' error={inputsError.street} onChange={handleChange} />
        <TextInput inputId='city' label='City' error={inputsError.city} onChange={handleChange} />
      </FormContent>
    </>
  )
}

export default AddressSection