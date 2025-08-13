import { useEffect } from "react"
import { Controller, useFormContext, useWatch } from "react-hook-form"

import DateInput from "../../../../components/inputs/DateInput"
import Dropdown from "../../../../components/inputs/Dropdown"
import H2 from "../../../../components/text/H2"
import { getErrorMessage } from "../helpers/getErrorMessage"
import { FormContent, FormPart } from "../styles"

const departments = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']

const JobSection = () => {
  const { formState: { errors }, register, control, setError, clearErrors } = useFormContext()

  const department = useWatch({control, name: 'department'})

  const filteredDepartments = !department
    ? departments
    : departments.filter(d => d.toLowerCase().includes(department.toLowerCase()))

  useEffect(() => {
    if (!department) return

    const isValid = departments.includes(department)

    if (!isValid) {
      setError('department', { type: 'manual', message: 'Please select a valid department' })
    } else {
      clearErrors('department')
    }
  }, [department, departments])

  return (
    <FormPart id='job'>
      <H2 text='Job' />
      <FormContent>
        <DateInput 
          label='Start date' 
          error={getErrorMessage(errors.startDate)} 
          {...register('startDate')}
        />
        <Controller
          name="department"
          control={control}
          render={({ field, fieldState }) => (
            <Dropdown
              {...field}
              label="State"
              options={filteredDepartments}
              error={fieldState.error?.message}
            />
          )}
        />
      </FormContent>
    </FormPart>
  )
}

export default JobSection