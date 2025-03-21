import Button from "../../../../components/Button"
import { ButtonsContainer } from "./styles"

const FormActions = () => {
  const handleCancel = () => {
    window.location.reload()
  }

  return (
    <ButtonsContainer>
      <Button variant='primary' label='Save' type="submit" />
      <Button variant='secondary' label='Cancel' onClick={handleCancel} />
    </ButtonsContainer>
  )
}

export default FormActions