import { 
  UseFormRegister, 
  FieldErrors, 
  UseFormSetValue, 
  UseFormTrigger, 
  UseFormGetValues 
} from "react-hook-form"

import DateInput from "../../../../components/inputs/DateInput"
import Dropdown from "../../../../components/inputs/Dropdown"
import H2 from "../../../../components/text/H2"
import { EmployeeType } from "../../../../types/employees"
import { FormContent, FormPart } from "../styles"

type JobSectionProps = {
  inputsError: FieldErrors<EmployeeType>
  register: UseFormRegister<EmployeeType>
  setValue: UseFormSetValue<EmployeeType>
  getValues: UseFormGetValues<EmployeeType>
  trigger: UseFormTrigger<EmployeeType>
}

const department = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']

const JobSection = ({ 
  inputsError, 
  register, 
  setValue, 
  getValues, 
  trigger 
}: JobSectionProps) => {
  return (
    <FormPart>
      <H2 text='Job' />
      <FormContent>
        <DateInput 
          label='Start date' 
          error={inputsError.startDate?.message} 
          {...register('startDate')}
        />
        <Dropdown 
          inputId='department'
          options={department} 
          value={getValues('department')} 
          label='Department' 
          error={inputsError.department?.message}
          setValue={setValue} 
          trigger={trigger} 
          register={register}
        />
      </FormContent>
    </FormPart>
  )
}

export default JobSection