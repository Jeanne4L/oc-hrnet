import { useEffect, useState } from "react"
import { useWatch, useFormContext } from "react-hook-form"

import H2 from "../../../../components/text/H2"
import Dropdown from "../../../../components/inputs/Dropdown"
import TextInput from "../../../../components/inputs/TextInput"
import { CitiesPlaceType } from "../../../../services/api/getCities/types"
import { useStatesData } from "../../../../hooks/useStatesData"
import { useCitiesData } from "../../../../hooks/useCitiesData"
import { getErrorMessage } from "../helpers/getErrorMessage"
import { FormContent, FormPart } from "../styles"

const AddressSection = () => {
  const [filteredStates, setFilteredStates] = useState<string[] | null>(null)
  const [places, setPlaces] = useState<CitiesPlaceType[] | null>(null)

  const { formState: {errors}, control, register, setValue, getValues, trigger } = useFormContext()
  
  const zipCode = useWatch({control, name: "zipCode"})
  const city = useWatch({control, name: "city"})
  const state = useWatch({control, name: "state"})

  const { states, loading: statesLoading, error: statesError } = useStatesData()
  const { cities, error: citiesError } = useCitiesData(zipCode)

  useEffect(() => {
    setFilteredStates(states)
  },[states])
  
  useEffect(() => {
    if (city) {
      handleCityChange(city)
    }
  }, [city]) 

  useEffect(() => {
    if (state) {
      handleStateChange(state)
    }
  }, [state]) 

  useEffect(() => {
    if (cities) {
      const filteredStates = states?.filter((state) =>
        cities.places.some((place) => place.state === state)
      )
      
      setFilteredStates(filteredStates ?? [])
      setPlaces([...cities.places])
      setValue("city", cities.places[0].placeName)
      setValue("state", cities.places[0].state)
      trigger(["zipCode", "city", "state"])
    }
  }, [cities])
  
  const handleCityChange = (city: string) => {
    const place = places?.find((place) => place.placeName === city)

    setValue("state", place?.state ?? "");
    trigger("city")
  }
  
  const handleStateChange = (stateValue: string) => {
    const filterResult = filteredStates?.filter((state) =>
      state.toLowerCase().includes(stateValue.toLowerCase())
    )
    setFilteredStates(filterResult ?? [])
  }

  return (
    <FormPart>
      <H2 text='Address' />
      <FormContent>
        <TextInput 
          {...register('street')}
          label='Street' 
          error={getErrorMessage(errors.street?.message)} 
        />
        <TextInput 
          {...register('zipCode')}
          label='Zip code' 
          error={getErrorMessage(errors.zipCode?.message)} 
        />
        <TextInput 
          label='City' 
          error={citiesError || getErrorMessage(errors.city?.message)} 
          value={getValues('city')} 
          {...register('city')}
        />
        <Dropdown 
          options={states} 
          value={getValues('state')} 
          inputId='state' 
          label='State' 
          loading={statesLoading}
          error={statesError || getErrorMessage(errors.state?.message)} 
        />
      </FormContent>
    </FormPart>
  )
}

export default AddressSection