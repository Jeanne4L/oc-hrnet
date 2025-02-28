import P from "../../text/P"
import { errorStyle, Input, InputContainer, Label } from "./styles"

type DateInputProps = { 
  inputId: string
  label: string
  error: string | null
  minDate?: string | number
  maxDate?: string | number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const DateInput = ({ inputId, label, error, minDate, maxDate, onChange }: DateInputProps) => {
  return (
    <InputContainer>
      <Label htmlFor={inputId}>{label}</Label>
      <Input type='date' id={inputId} name={inputId} onChange={(e) => onChange(e)} min={minDate} max={maxDate}/>
      {error && <P style={errorStyle}>{error}</P>}
    </InputContainer>
  )
}

export default DateInput