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
  handleSelect: (option: string) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AddressSection = ({ inputsError, states, formData, handleSelect, handleChange }: AddressProps) => {
  return (
    <FormPart>
      <H2 text='Address' />
      <FormContent>
        <TextInput 
          inputId='street' 
          label='Street' 
          error={inputsError.street} 
          onChange={handleChange} 
        />
        <TextInput 
          inputId='zipCode' 
          label='Zip code' 
          error={inputsError.zipCode} 
          onChange={handleChange} 
        />
        <TextInput 
          inputId='city' 
          label='City' 
          error={inputsError.city} 
          value={formData.city} 
          onChange={handleChange} 
        />
        <Dropdown 
          options={states} 
          value={formData.state} 
          inputId='state' 
          label='State' 
          error={inputsError.state} 
          onInputChange={handleChange}
          handleSelect={handleSelect}
        />
      </FormContent>
    </FormPart>
  )
}

export default AddressSection