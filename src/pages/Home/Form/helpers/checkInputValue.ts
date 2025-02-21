import { InputsError } from "../../../../types/errors"

const checkTextValue = (value: string) => {
  const stringRegex = /^[A-Za-zÀ-ÿ\s'-]+$/

  return stringRegex.test(value.trim())
}

export const checkInputValue = (value: string, type: string) => {
  switch(type) {
    case 'text':
      if (!checkTextValue(value)) {
        return InputsError.TEXT_INPUT;
      } 
      break
    
    default: return null
  }
}