import Card from "react-bootstrap/Card"
import { Container } from "react-bootstrap"
import { useState } from "react"
import SAlert from "../../components/Alert"
import { useNavigate } from "react-router-dom"
import SForm from "./form"
import { postData } from "../../utils/fetch"
import { useDispatch } from "react-redux"
import { userLogin } from "../../redux/auth/actions"

function PageSignin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      // const res = await axios.post(
      //   `${config.api_host_dev}/cms/auth/signin`,
      //   form
      // )
      const res = await postData(`/cms/auth/signin`, form)
      dispatch(userLogin(res.data.data.token, res.data.data.role))
      setIsLoading(false)
      navigate("/")
    } catch (err) {
      setIsLoading(false)
      setAlert({
        status: true,
        type: "danger",
        message: err?.response?.data?.msg ?? "Internal server error",
      })
    }
  }

  return (
    <Container md={12} className="my-5">
      <div className="m-auto" style={{ width: "50%" }}>
        {alert.status && <SAlert type={alert.type} message={alert.message} />}
      </div>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title>Page Signin</Card.Title>
          <SForm
            handleChange={handleChange}
            form={form}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default PageSignin
