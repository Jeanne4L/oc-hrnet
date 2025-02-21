export enum InputsError {
  TEXT_INPUT = 'This field must only contain letters'
}

export type InputsErrorType = {
  firstName: string | null,
  lastName: string | null,
  street: string | null,
  city: string | null
}

export const emptyInputsError = {
  firstName: null,
  lastName: null,
  street: null,
  city: null
}