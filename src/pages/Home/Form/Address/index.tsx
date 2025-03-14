import { useEffect, useState } from "react"
import { UseFormRegister, FieldErrors, UseFormTrigger, UseFormSetValue, UseFormGetValues, UseFormWatch, useWatch, Control } from "react-hook-form"

import H2 from "../../../../components/text/H2"
import Dropdown from "../../../../components/inputs/Dropdown"
import TextInput from "../../../../components/inputs/TextInput"
import { CitiesPlaceType } from "../../../../services/api/getCities/types"
import { getCities } from "../../../../services/api/getCities"
import { checkIfErrorType } from "../../../../types/errors"
import { EmployeeType } from "../../../../types/employees"
import { FormContent, FormPart } from "../styles"

type AddressProps = {
  inputsError: FieldErrors<EmployeeType>
  states: string[] | null
  register: UseFormRegister<EmployeeType>
  setValue: UseFormSetValue<EmployeeType>
  getValues: UseFormGetValues<EmployeeType>
  trigger: UseFormTrigger<EmployeeType>
  control: Control<EmployeeType>
}

const AddressSection = ({ inputsError, states, register, setValue, getValues, trigger, control }: AddressProps) => {
  const [filteredStates, setFilteredStates] = useState<string[] | null>(states)
  const [places, setPlaces] = useState<CitiesPlaceType[] | null>(null)
  
  const zipCode = useWatch({control, name: "zipCode"})
  const city = useWatch({control, name: "city"})
  const state = useWatch({control, name: "state"})

  useEffect(() => {
    handleZipCode(zipCode)
  }, [zipCode]) 

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
  
  const handleZipCode = async (zip: string) => {
    if(!zip || zip.length < 5) {
      setFilteredStates(states)
      setValue("city", '')
      setValue("state", '')
    } else {
      const citiesApi = await getCities(zip)
    
      if (!checkIfErrorType(citiesApi)) {
        const filteredStates = states?.filter((state) =>
          citiesApi.places.some((place) => place.state === state)
        )
    
        setFilteredStates(filteredStates ?? [])
        setPlaces([...citiesApi.places])
        setValue("city", citiesApi.places[0].placeName)
        setValue("state", citiesApi.places[0].state)
  
        trigger(["zipCode", "city", "state"])
      }
    }
  }
  
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
          error={inputsError.street?.message} 
        />
        <TextInput 
          {...register('zipCode')}
          label='Zip code' 
          error={inputsError.zipCode?.message} 
        />
        <TextInput 
          label='City' 
          error={inputsError.city?.message} 
          value={getValues('city')} 
          {...register('city')}
        />
        <Dropdown 
          options={states} 
          value={getValues('state')} 
          inputId='state' 
          label='State' 
          error={inputsError.state?.message} 
          setValue={setValue} 
          trigger={trigger} 
          register={register}
        />
      </FormContent>
    </FormPart>
  )
}

export default AddressSection