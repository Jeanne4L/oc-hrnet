import Button from "../../../../components/Button"
import { ButtonsContainer } from "./styles"

const FormActions = () => {
  const handleCancel = () => {
    window.location.reload()
  }

  return (
    <ButtonsContainer>
      <Button variant='secondary' label='Cancel' onClick={handleCancel} />
      <Button variant='primary' label='Save' type="submit" id="submit" />
    </ButtonsContainer>
  )
}

export default FormActions