import { DetailedHTMLProps, InputHTMLAttributes } from "react"

import P from "../../text/P"
import { errorStyle, Input, InputContainer, Label } from "./styles"

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
  return (
    <InputContainer>
      <Label htmlFor={inputProps.id}>{label}</Label>
      <Input 
        type='date' 
        {...inputProps}
      />
      {error && <P style={errorStyle}>{error}</P>}
    </InputContainer>
  )
}

export default DateInput