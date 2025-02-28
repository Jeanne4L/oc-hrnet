import H2 from "../../../../components/text/H2"
import Dropdown from "../../../../components/inputs/Dropdown"
import TextInput from "../../../../components/inputs/TextInput"
import { EmployeeType } from "../../../../types/employees"
import { InputsErrorType } from "../../../../types/errors"
import { FormContent, FormPart } from "../styles"

type AddressProps = {
  inputsError: InputsErrorType
  states: string[] | null
  formData: EmployeeType
  setFormData: (formData: EmployeeType) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AddressSection = ({ inputsError, states, formData, setFormData, handleChange }: AddressProps) => {
  const handleOptionSelect = (selectedOption: string) => {
    setFormData({
      ...formData,
      state: selectedOption
    })
  }

  return (
    <FormPart>
      <H2 text='Address' />
      <FormContent>
        <TextInput inputId='street' label='Street' error={inputsError.street} onChange={handleChange} />
        <TextInput inputId='zipCode' label='Zip code' error={inputsError.zipCode} onChange={handleChange} />
        <TextInput inputId='city' label='City' error={inputsError.city} onChange={handleChange} value={formData.city} />
        <Dropdown 
          options={states} 
          value={formData.state} 
          inputId='state' 
          label='State' 
          error={inputsError.state} 
          onInputChange={handleChange}
          handleSelect={handleOptionSelect}
        />
      </FormContent>
    </FormPart>
  )
}

export default AddressSection