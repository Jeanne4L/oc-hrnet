import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

import P from "../../text/P"
import { errorStyle, Input, InputContainer, Label } from "./styles"

type TextInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & { 
  label: string
  error?: string
}

const TextInput = ({ label, error, ...inputProps }: TextInputProps) => {
  return (
    <InputContainer>
      <Label htmlFor={inputProps.id}>{label}</Label>
      <Input 
        type='text' 
        {...inputProps}
      />
      {error && <P style={errorStyle}>{error}</P>}
    </InputContainer>
  )
}

export default TextInput