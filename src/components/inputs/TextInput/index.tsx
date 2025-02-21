import P from "../../text/P"
import { errorStyle, Input, InputContainer, Label } from "./styles"

type TextInputProps = { 
  inputId: string
  label: string
  error: string | null
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({ inputId, label, error, onChange }: TextInputProps) => {
  return (
    <InputContainer>
      <Label htmlFor={inputId}>{label}</Label>
      <Input type='text' id={inputId} name={inputId} onChange={(e) => onChange(e)} />
      {error && <P style={errorStyle}>{error}</P>}
    </InputContainer>
  )
}

export default TextInput