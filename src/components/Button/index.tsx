import { Ref } from "react"
import { ButtonContainer } from "./styles"

type ButtonProps = {
  label: string
  variant: 'primary' | 'secondary'
  type?: 'submit'
  ref?: Ref<HTMLButtonElement>
  id?: string
  onClick?: () => void
}

const Button = ({ label, variant, type, ref, id, onClick }: ButtonProps) => {
  return (
    <ButtonContainer 
      ref={ref} 
      type={type} 
      onClick={onClick} 
      variant={variant}
      data-testid={id}
    >
      {label}
    </ButtonContainer>
  )
}

export default Button