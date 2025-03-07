import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useEmployees } from "../../../contexts/EmployeesContext"
import { checkIfErrorType, emptyInputsError, InputsErrorType } from "../../../types/errors"
import { EmployeeType, emptyEmployee } from "../../../types/employees"
import { getCities } from "../../../services/api/getCities"
import { CitiesPlaceType } from "../../../services/api/getCities/types"
import { getStates } from "../../../services/api/getStates"
import SuccessModal from "../../../components/SuccessModal"
import P from "../../../components/text/P"
import PersonalDetailsSection from "./PersonalDetailsSection"
import FormActions from "./FormActions"
import AddressSection from "./Address"
import JobSection from "./Job"
import { checkInputValue } from "./helpers/checkInputValue"
import { errorStyle, FormContainer } from "./styles"

const Form = () => {
  const [inputsError, setInputsError] = useState<InputsErrorType>(emptyInputsError)
  const [formData, setFormData] = useState<EmployeeType>(emptyEmployee)
  const [places, setPlaces] = useState<CitiesPlaceType[] | null>(null)
  const [states, setStates] = useState<string[] | null>(null)
  const [filteredStates, setFilteredStates] = useState<string[] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const { employees, setEmployees } = useEmployees()

  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const states = await getStates()

      if(checkIfErrorType(states)) {
        setInputsError({
          ...inputsError,
          state: states.error
        }) 
      } else {
        const statesName = states.map((state) => state.name)
        setStates(statesName)
        setFilteredStates(statesName)
        setInputsError({
          ...inputsError,
          state: null
        }) 
      }
    })()
  },[])

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target
  
    const error = checkInputValue(value, type, name)
    setInputsError((prev) => ({ ...prev, [name]: error }))
  
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    if (name === 'zipCode' && value.length >= 5) await handleZipCode(value)
    if (name === 'city') handleCityChange(value)
    if (name === 'state') handleStateChange(value)
  }
  
  const handleZipCode = async (zip: string) => {
    const citiesApi = await getCities(zip)
  
    if (!checkIfErrorType(citiesApi)) {
      const filteredStates = states?.filter((state) =>
        citiesApi.places.some((place) => place.state === state)
      )
  
      setStates(filteredStates ?? [])
      setFormData((prev) => ({
        ...prev,
        city: citiesApi.places[0].placeName,
        state: citiesApi.places[0].state
      }))
      setPlaces([...citiesApi.places])
      setInputsError((prev) => ({ ...prev, zipCode: null, city: null, state: null }))
    }
  }
  
  const handleCityChange = (city: string) => {
    const place = places?.find((place) => place.placeName === city)
    setFormData((prev) => ({ ...prev, state: place?.state ?? '' }))
  }
  
  const handleStateChange = (stateValue: string) => {
    const filteredStates = states?.filter((state) =>
      state.toLowerCase().includes(stateValue.toLowerCase())
    )
    setFilteredStates(filteredStates ?? [])
  }  

  const handleSubmit = (formData: EmployeeType, inputsError: InputsErrorType) => {
    const isFormValid = Object.values(inputsError).every(error => error === null) && !Object.values(formData).some(value => value === undefined)

    if(isFormValid) {
      setEmployees([
        ...employees,
        formData
      ])
      setIsModalOpen(true)
      setFormData(emptyEmployee)
      setError(null)
    } else {
      setError('Please fill in all fields')
    }
  }

  const handleSelect = (selectedOption: string) => {
    setFormData({
      ...formData,
      state: selectedOption
    })
  }

  return (
    <FormContainer>
      <PersonalDetailsSection 
        inputsError={inputsError} 
        handleChange={handleChange} 
      />
      <AddressSection 
        inputsError={inputsError} 
        states={filteredStates} 
        formData={formData} 
        handleSelect={handleSelect} 
        handleChange={handleChange} 
      />
      <JobSection 
        inputsError={inputsError} 
        formData={formData} 
        setFormData={setFormData} 
        handleChange={handleChange} 
      />
      {error && <P style={errorStyle}>{error}</P>}
      <FormActions 
        handleSubmit={() => handleSubmit(formData, inputsError)} 
      />
      {isModalOpen && (
        <SuccessModal 
          message={`Employee has been created !`} 
          buttonLabel={"See employees"} 
          handleButtonClick={() => navigate('/employees')} 
          handleClose={() => setIsModalOpen(false)} 
        />
      )}
    </FormContainer>
  )
}

export default Form