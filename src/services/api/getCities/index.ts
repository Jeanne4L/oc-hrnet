import axios from "axios"

import { Urls } from "../../../constants/urls"
import { formatCitiesData } from "./helpers/formatCitiesData"
import { checkIfCitiesData, CitiesType } from "./types"

export const getCities = async (zipCode: string): Promise<CitiesType> => {
  const result = await axios.get(
    `${Urls.CITY_API_URL}/us/${zipCode}`
  )

  if(checkIfCitiesData(result.data)) {
    return formatCitiesData(result.data)
  }

  throw new Error('Invalid states data structure')
}