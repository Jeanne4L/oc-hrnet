import axios from "axios"

import { Urls } from "../../../constants/urls"
import { checkIfAxiosSuccess } from "../../../types/axios"
import { checkIfStatesData, StateType } from "./types"

export const getStates = async (): Promise<StateType[] | { error: string }> => {
  const result = await axios.post(
    `${Urls.STATES_API_URL}`,
    {
      'country': 'United States'
    }
  )
  
  if(checkIfAxiosSuccess(result)) {
    if(checkIfStatesData(result.data.data)) {
      return result.data.data.states
    }
  }

  return {error: 'An error occured while retrieving states'}
}