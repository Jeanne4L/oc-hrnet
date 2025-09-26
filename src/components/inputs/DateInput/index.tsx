import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import { Controller, useFormContext } from "react-hook-form"
import DatePicker from "react-multi-date-picker"

import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import "react-multi-date-picker/styles/colors/yellow.css"

import P from "../../text/P"
import { datePickerStyle, errorStyle, InputContainer, Label } from "./styles"

type DateInputProps = 
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {  
  label: string
  error?: string
  maxDate?: string | number
}

const DateInput = ({ 
  label, 
  error, 
  ...inputProps 
}: DateInputProps) => {
  const { control } = useFormContext()
  
  return (
    <InputContainer>
      <Label htmlFor={inputProps.id}>{label}</Label>
      <Controller
        control={control}
        name={inputProps.id || 'date'}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            id={inputProps.id}
            value={value || ''}
            onChange={(date) => {
              onChange(date?.isValid ? date.format('YYYY-MM-DD') : '')
            }}
            style={datePickerStyle}
            className='bg-dark yellow'
          />
        )}
      />
      {error && <P style={errorStyle}>{error}</P>}
    </InputContainer>
  )
}

export default DateInput