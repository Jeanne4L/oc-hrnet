import { ButtonContainer } from "./styles"

type ButtonProps = {
  label: string
  variant: 'primary' | 'secondary'
  type?: 'submit'
  onClick?: () => void
}

const Button = ({ label, variant, type, onClick }: ButtonProps) => {
  return (
    <ButtonContainer type={type} onClick={onClick} variant={variant}>
      {label}
    </ButtonContainer>
  )
}

export default Button