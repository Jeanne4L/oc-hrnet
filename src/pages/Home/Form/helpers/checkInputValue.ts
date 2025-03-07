import { InputsError } from "../../../../types/errors"

const checkTextValue = (value: string) => {
  const stringRegex = /^[A-Za-zÀ-ÿ\s'-]+$/

  return stringRegex.test(value.trim())
}

const checkZipValue = (value: string) => {
  const zipRegex = /^\d{5}(-\d{4})?$/

  return zipRegex.test(value.trim())
}

const checkStreetValue = (value: string) => {
  const streetRegex = /^[a-zA-Z0-9\-\#\./&', ]+$/

  return streetRegex.test(value.trim())
}

const checkDateValue = (value: string) => {
  const date = new Date(value)
  
  return !isNaN(date.getTime())
}

export const checkInputValue = (value: string, type: string, name: string) => {
  const validators: Record<string, (val: string) => boolean> = {
    text: checkTextValue,
    date: checkDateValue,
    zipCode: checkZipValue,
    street: checkStreetValue
  }

  const errors: Record<string, InputsError> = {
    text: InputsError.TEXT_INPUT,
    date: InputsError.INCORRECT_FORMAT,
    zipCode: InputsError.INCORRECT_FORMAT,
    street: InputsError.INCORRECT_FORMAT
  }

  const result = validators[name] ? (validators[name](value) ? null : errors[name]) 
    : validators[type] ? (validators[type](value) ? null : errors[type])
    : null

  return result
}