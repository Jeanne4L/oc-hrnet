import { z } from "zod"
import { InputsError } from "./errors"

const stringRegex = /^[A-Za-zÀ-ÿ\s'-]+$/
const zipCodeRegex = /^\d{5}(-\d{4})?$/
const streetRegex = /^[a-zA-Z0-9\-\#\./&', ]+$/
const requiredMessage = 'Please fill in all fields'

const stringField = (regex?: RegExp) =>
  z.string().nonempty({ message: requiredMessage }).min(2).regex(regex ?? stringRegex, InputsError.INCORRECT_FORMAT)

const dateField = () =>
  z.string().nonempty({ message: requiredMessage })
    .refine((val) => !isNaN(Date.parse(val)), { message: InputsError.INCORRECT_FORMAT })
    .transform((val) => new Date(val))

export const formSchema = z.object({
  firstName: stringField(),
  lastName: stringField(),
  street: stringField(streetRegex),
  city: stringField(),
  zipCode: z.string().nonempty({ message: requiredMessage }).min(5).regex(zipCodeRegex, InputsError.INCORRECT_FORMAT),
  state: stringField(),
  department: stringField(),
  birthDate: dateField(),
  startDate: dateField()
})

export type EmployeeType = z.infer<typeof formSchema>
export type EmployeesType = EmployeeType[]

export const emptyEmployee: EmployeeType = {
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  zipCode: '',
  state: '',
  department: '',
  birthDate: new Date(),
  startDate: new Date()
}
