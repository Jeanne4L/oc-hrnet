import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

import { useEmployees } from "../../../contexts/EmployeesContext"
import { checkIfErrorType } from "../../../types/errors"
import { EmployeeType, emptyEmployee, formSchema } from "../../../types/employees"
import { getStates } from "../../../services/api/getStates"
import SuccessModal from "../../../components/SuccessModal"
import P from "../../../components/text/P"
import PersonalDetailsSection from "./PersonalDetailsSection"
import FormActions from "./FormActions"
import AddressSection from "./Address"
import JobSection from "./Job"
import { errorStyle, FormContainer } from "./styles"

const Form = () => {
  const [states, setStates] = useState<string[] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const { employees, setEmployees } = useEmployees()

  const navigate = useNavigate()

  const methods = useForm<EmployeeType>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: emptyEmployee
  })

  useEffect(() => {
    (async () => {
      const states = await getStates()

      if(!checkIfErrorType(states)) {
        const statesName = states.map((state) => state.name)
        setStates(statesName)
      }
    })()
  },[])

  const onSubmit = async (data: EmployeeType) => {
    const isFormValid = await methods.trigger()

    if(isFormValid) {
      setEmployees([
        ...employees,
        data
      ])
      setIsModalOpen(true)
      setError(null)
    } else {
      setError('Please fill in all fields')
    }
  }

  return (
    <FormProvider {...methods}>
      <FormContainer onSubmit={methods.handleSubmit(onSubmit)}>
        <PersonalDetailsSection />
        <AddressSection states={states} />
        <JobSection />
        {error && <P style={errorStyle}>{error}</P>}
        <FormActions />
        {isModalOpen && (
          <SuccessModal 
            message={`Employee has been created !`} 
            buttonLabel={"See employees"} 
            handleButtonClick={() => navigate('/employees')} 
            handleClose={() => setIsModalOpen(false)} 
          />
        )}
      </FormContainer>
    </FormProvider>
  )
}

export default Form