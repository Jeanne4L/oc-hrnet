import { AxiosResponse } from "axios"

export const checkIfAxiosSuccess = (value: AxiosResponse) => {
  return value && value.status === 200
}