import { useFormContext } from "react-hook-form"

import H2 from "../../../../components/text/H2"
import DateInput from "../../../../components/inputs/DateInput"
import TextInput from "../../../../components/inputs/TextInput"
import { getErrorMessage } from "../helpers/getErrorMessage"
import { FormContent, FormPart } from "../styles"

const PersonalDetailsSection = () => {
  const { formState: { errors }, register } = useFormContext()
  return (
    <FormPart>
      <H2 text='Personal details' />
      <FormContent>
        <TextInput 
          label='First name' 
          error={getErrorMessage(errors.firstName)} 
          {...register('firstName')}
        />
        <TextInput 
          label='Last name' 
          error={getErrorMessage(errors.lastName)} 
          {...register('lastName')}
        />
        <DateInput 
          label='Date of birth' 
          error={getErrorMessage(errors.birthDate)} 
          {...register('birthDate')}
        />
      </FormContent>
    </FormPart>
  )
}

export default PersonalDetailsSection