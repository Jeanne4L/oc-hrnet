import { withHeader } from "../../hoc/withHeader"
import H1 from "../../components/text/H1"
import Form from "./Form"

const HomePage = () => {
  return (
    <>
      <H1 text='New employee' uppercase />
      <Form />
    </>
  )
}

export default withHeader(HomePage)