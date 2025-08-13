import { useEffect, useMemo } from "react"
import { useWatch, useFormContext, Controller } from "react-hook-form"

import H2 from "../../../../components/text/H2"
import Dropdown from "../../../../components/inputs/Dropdown"
import TextInput from "../../../../components/inputs/TextInput"
import { zipCodeRegex } from "../../../../types/employees"
import { useStatesData } from "../../../../hooks/useStatesData"
import { useCitiesData } from "../../../../hooks/useCitiesData"
import { getErrorMessage } from "../helpers/getErrorMessage"
import { FormContent, FormPart } from "../styles"

const AddressSection = () => {
  const { formState: {errors}, control, register, setValue, clearErrors, setError } = useFormContext()
  
  const zipCode = useWatch({control, name: "zipCode"})
  const city = useWatch({control, name: "city"})
  const state = useWatch({control, name: "state"})

  const isZipCodeValid = zipCodeRegex.test(zipCode)
  
  const { states, loading: statesLoading, error: statesError } = useStatesData()
  const { cities, error: citiesError } = useCitiesData(isZipCodeValid ? zipCode : undefined)

  const places = useMemo(() => cities?.places ?? [], [cities])

  const filteredStates = useMemo(() => {
    if (!state) return states ?? []

    return states?.filter(s => s.toLowerCase().includes(state.toLowerCase())) ?? []
  }, [state, states])

  useEffect(() => {
    if (!isZipCodeValid) {
      setValue('city', '')
      setValue('state', '')
    } else if (cities?.places?.length) {
      setValue('city', cities.places[0].placeName)
      setValue('state', cities.places[0].state)
    }
  }, [zipCode, isZipCodeValid, cities])

  useEffect(() => {
    if (!city || !places.length) return

    const place = places.find(p => p.placeName === city)
    setValue('state', place?.state ?? '')
  }, [city, places])

  useEffect(() => {
    if (!state) return

    const isValid = states.includes(state)

    if (!isValid) {
      setError('state', { type: 'manual', message: 'Please select a valid state' })
    } else {
      clearErrors('state')
    }
  }, [state, states])

  return (
    <FormPart id='address'>
      <H2 text='Address' />
      <FormContent>
        <TextInput
          id='street'
          label='Street' 
          error={getErrorMessage(errors.street)} 
          {...register('street')}
        />
        <TextInput 
          id='zipCode'
          label='Zip code' 
          error={getErrorMessage(errors.zipCode)} 
          {...register('zipCode')}
        />
        <TextInput 
          id='city'
          label='City' 
          error={citiesError || getErrorMessage(errors.city)} 
          {...register('city')}
        />
        <Controller
          name="state"
          control={control}
          render={({ field, fieldState }) => (
            <Dropdown
              {...field}
              label="State"
              loading={statesLoading}
              options={filteredStates}
              error={statesError || fieldState.error?.message}
            />
          )}
        />
      </FormContent>
    </FormPart>
  )
}

export default AddressSection