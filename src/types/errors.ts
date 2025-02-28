export enum InputsError {
  TEXT_INPUT = 'This field must only contain letters',
  INCORRECT_FORMAT = 'The format is incorrect'
}

export type InputsErrorType = {
  firstName: string | null
  lastName: string | null
  street: string | null
  city: string | null
  zipCode: string | null
  state: string | null
  department: string | null
  birthDate: string | null
  startDate: string | null
}

export const emptyInputsError = {
  firstName: null,
  lastName: null,
  street: null,
  city: null,
  zipCode: null,
  state: null,
  department: null,
  birthDate: null,
  startDate: null
}

export type ErrorType = { error: string }

export const checkIfErrorType = (error: any): error is ErrorType => {
  return error && error.error && typeof error.error === 'string'
}