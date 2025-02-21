import { Title } from "./styles"

type H2Props = {
  text: string
}

const H2 = ({ text }: H2Props) => {
  return (
    <Title>{text}</Title>
  )
}

export default H2