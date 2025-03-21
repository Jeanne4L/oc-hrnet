import { withHeader } from "../../hoc/withHeader"
import PageContainer from "../parts/PageContainer"
import H1 from "../../components/text/H1"
import Form from "./Form"

const HomePage = () => {
  return (
    <PageContainer>
      <H1 text='New employee' uppercase />
      <Form />
    </PageContainer>
  )
}

export default withHeader(HomePage)