import { ButtonContainer } from "./styles"

type ButtonProps = {
  label: string
  variant: 'primary' | 'secondary'
  onClick: () => void
}

const Button = ({ label, variant, onClick }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} variant={variant}>
      {label}
    </ButtonContainer>
  )
}

export default Button