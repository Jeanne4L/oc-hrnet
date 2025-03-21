import { Ref } from "react"
import { ButtonContainer } from "./styles"

type ButtonProps = {
  label: string
  variant: 'primary' | 'secondary'
  type?: 'submit'
  ref?: Ref<HTMLButtonElement>
  onClick?: () => void
}

const Button = ({ label, variant, type, ref, onClick }: ButtonProps) => {
  return (
    <ButtonContainer 
      ref={ref} 
      type={type} 
      onClick={onClick} 
      variant={variant}
    >
      {label}
    </ButtonContainer>
  )
}

export default Button