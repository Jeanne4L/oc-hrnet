import DateInput from "../../../../components/inputs/DateInput"
import Dropdown from "../../../../components/inputs/Dropdown"
import H2 from "../../../../components/text/H2"
import { EmployeeType } from "../../../../types/employees"
import { InputsErrorType } from "../../../../types/errors"
import { FormContent, FormPart } from "../styles"

type JobSectionProps = {
  formData: EmployeeType
  inputsError: InputsErrorType
  setFormData: (formData: EmployeeType) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const department = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']

const JobSection = ({ formData, inputsError, setFormData, handleChange }: JobSectionProps) => {
  const handleSelectOption = (value: string) => {
    setFormData({
      ...formData,
      department: value
    })
  }

  return (
    <FormPart>
      <H2 text='Job' />
      <FormContent>
        <DateInput 
          inputId='startDate' 
          label='Start date' 
          error={inputsError.startDate} 
          onChange={handleChange} 
        />
        <Dropdown 
          options={department} 
          value={formData.department} 
          inputId='department' 
          label='Department' 
          error={inputsError.department} 
          onInputChange={handleChange}
          handleSelect={handleSelectOption}
        />
      </FormContent>
    </FormPart>
  )
}

export default JobSection