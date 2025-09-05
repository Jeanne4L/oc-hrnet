import { useState, useEffect } from "react"

import { getCities } from "../services/api/getCities"
import { CitiesType } from "../services/api/getCities/types"

export const useCitiesData = (zipCode: string) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [cities, setCities] = useState<CitiesType>()

  useEffect(() => {
    if (!zipCode || zipCode.length < 5) {
      setCities(undefined)
      setError(null)
      return
    }

    const fetchCities = async () => {
      setLoading(true)
      setError(null)

      try {
        const citiesApi = await getCities(zipCode)
        setCities(citiesApi)
      } catch (error: any) {
        setError(error?.message || 'An error occurred while retrieving cities')
      } finally {
        setLoading(false)
      }
    }

    fetchCities()
  }, [zipCode]) 

  return { cities, error, loading }
}