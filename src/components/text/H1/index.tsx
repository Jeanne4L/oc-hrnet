import { Title } from "./styles"

type H1Props = {
  text: string
  uppercase?: boolean
}

const H1 = ({ text, uppercase = false }: H1Props) => {
  return (
    <Title uppercase={uppercase}>{text}</Title>
  )
}

export default H1