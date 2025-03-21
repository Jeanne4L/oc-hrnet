import { useFormContext } from "react-hook-form"

import DateInput from "../../../../components/inputs/DateInput"
import Dropdown from "../../../../components/inputs/Dropdown"
import H2 from "../../../../components/text/H2"
import { getErrorMessage } from "../helpers/getErrorMessage"
import { FormContent, FormPart } from "../styles"

const department = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']

const JobSection = () => {
  const { formState: { errors }, register, getValues } = useFormContext()
  return (
    <FormPart>
      <H2 text='Job' />
      <FormContent>
        <DateInput 
          label='Start date' 
          error={getErrorMessage(errors.startDate?.message)} 
          {...register('startDate')}
        />
        <Dropdown 
          inputId='department'
          options={department} 
          value={getValues('department')} 
          label='Department' 
          error={getErrorMessage(errors.department?.message)}
        />
      </FormContent>
    </FormPart>
  )
}

export default JobSection