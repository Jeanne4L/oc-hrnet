import { useState, useEffect } from "react"

import { getStates } from "../services/api/getStates"

export const useStatesData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null)
  const [states, setStates] = useState<string[]>([])

  useEffect(() => {
    (async () => {
      try {
        const statesApi = await getStates()

        if(statesApi) {
          const statesName = statesApi.map((state) => state.name)
          setStates(statesName)
        } else {
          setError('An error occured while retrieving states')
        }
      } catch (error: any) {
        setError(error?.message || 'An error occurred while retrieving states')
      } finally {
        setLoading(false)
      }
    })()
  },[])

  return { states, error, loading }
}