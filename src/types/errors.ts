export enum InputsError {
  TEXT_INPUT = 'This field must only contain letters',
  INCORRECT_FORMAT = 'The format is incorrect'
}

export type ErrorType = { error: string }

export const checkIfErrorType = (error: any): error is ErrorType => {
  return error && error.error && typeof error.error === 'string'
}