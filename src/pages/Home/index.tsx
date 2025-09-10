import Layout from "../../layouts/Layout"
import H1 from "../../components/text/H1"
import PageContainer from "../parts/PageContainer"
import Form from "./Form"

const HomePage = () => {
  return (
    <Layout>
      <PageContainer>
        <H1 text='New employee' uppercase />
        <Form />
      </PageContainer>
    </Layout>
  )
}

export default HomePage