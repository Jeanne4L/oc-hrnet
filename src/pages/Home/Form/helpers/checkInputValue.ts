import { InputsError } from "../../../../types/errors"

const checkTextValue = (value: string) => {
  const stringRegex = /^[A-Za-zÀ-ÿ\s'-]+$/

  return stringRegex.test(value.trim())
}

const checkZipValue = (value: string) => {
  const zipRegex = /^\d{5}(-\d{4})?$/

  return zipRegex.test(value.trim())
}

const checkDateValue = (value: string) => {
  const date = new Date(value)

  return !isNaN(date.getTime())
}

export const checkInputValue = (value: string, type: string, name: string) => {
  switch(type) {
    case 'text':
      if(name === 'zipCode') {
        if(!checkZipValue(value)) {
          return InputsError.INCORRECT_FORMAT
        }
      } else if (!checkTextValue(value)) {
        return InputsError.TEXT_INPUT
      } 
      break

    case 'date':
      if(!checkDateValue(value)) {
        return InputsError.INCORRECT_FORMAT
      }
      break
    
    default: return null
  }
  return null
}