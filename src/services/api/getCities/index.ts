import axios from "axios"

import { Urls } from "../../../constants/urls"
import { checkIfAxiosSuccess } from "../../../types/axios"
import { formatCitiesData } from "./helpers/formatCitiesData"
import { checkIfCitiesData, CitiesType } from "./types"

export const getCities = async (zipCode: string): Promise<CitiesType | { error: string }> => {
  const result = await axios.get(
    `${Urls.CITY_API_URL}/us/${zipCode}`
  )

  if(checkIfAxiosSuccess(result)) {
    if(checkIfCitiesData(result.data)) {
      return formatCitiesData(result.data)
    }
  }

  return {error: 'An error occured while retrieving city data'}
}