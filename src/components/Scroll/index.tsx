import { useNavigate } from "react-router-dom"

import Arrow from "../icons/Arrow"
import { Container } from "./styles"

type ScrollProps = {
  target: string
}

const Scroll = ({ target }: ScrollProps) => {
  const navigate = useNavigate()
  return (
    <Container onClick={() => navigate(`#${target}`)}>
      <Arrow />
    </Container>
  )
}

export default Scroll