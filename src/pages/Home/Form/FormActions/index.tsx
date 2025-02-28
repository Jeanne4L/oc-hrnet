import Button from "../../../../components/Button"
import { ButtonsContainer } from "./styles"

type FormActionsProps = {
  handleSubmit: () => void
}

const FormActions = ({ handleSubmit }: FormActionsProps) => {
  const handleCancel = () => {
    window.location.reload()
  }

  return (
    <ButtonsContainer>
      <Button variant='secondary' label='Cancel' onClick={handleCancel} />
      <Button variant='primary' label='Save' onClick={handleSubmit} />
    </ButtonsContainer>
  )
}

export default FormActions