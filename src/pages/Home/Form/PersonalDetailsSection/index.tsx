import { FieldErrors, UseFormRegister } from "react-hook-form"

import H2 from "../../../../components/text/H2"
import DateInput from "../../../../components/inputs/DateInput"
import TextInput from "../../../../components/inputs/TextInput"
import { EmployeeType } from "../../../../types/employees"
import { FormContent, FormPart } from "../styles"

type PersonalDetailsProps = {
  inputsError: FieldErrors<EmployeeType>
  register: UseFormRegister<EmployeeType>
}

const PersonalDetailsSection = ({ inputsError, register }: PersonalDetailsProps) => {
  return (
    <FormPart>
      <H2 text='Personal details' />
      <FormContent>
        <TextInput 
          label='First name' 
          error={inputsError.firstName?.message} 
          {...register('firstName')}
        />
        <TextInput 
          label='Last name' 
          error={inputsError.lastName?.message} 
          {...register('lastName')}
        />
        <DateInput 
          label='Date of birth' 
          error={inputsError.birthDate?.message} 
          {...register('birthDate')}
        />
      </FormContent>
    </FormPart>
  )
}

export default PersonalDetailsSection