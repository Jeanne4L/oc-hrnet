import axios from "axios"

import { Urls } from "../../../constants/urls"
import { checkIfStatesData, StateType } from "./types"

export const getStates = async (): Promise<StateType[]> => {
  const result = await axios.post(
    `${Urls.STATES_API_URL}`,
    {
      'country': 'United States'
    }
  )
  
  if(checkIfStatesData(result.data.data)) {
    return result.data.data.states
  }

  throw new Error('Invalid states data structure')
}