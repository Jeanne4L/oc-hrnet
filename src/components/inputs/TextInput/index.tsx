import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

import P from "../../text/P"
import { errorStyle, Input, InputContainer, Label } from "./styles"

type TextInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & { 
  label: string
  error?: string
  onFocus?: () => void
}

const TextInput = ({ label, error, onFocus, ...inputProps }: TextInputProps) => {
  return (
    <InputContainer>
      <Label htmlFor={inputProps.id}>{label}</Label>
      <Input 
        type='text' 
        data-testid={inputProps.id}
        onFocus={onFocus}
        {...inputProps}
      />
      {error && <P style={errorStyle}>{error}</P>}
    </InputContainer>
  )
}

export default TextInput