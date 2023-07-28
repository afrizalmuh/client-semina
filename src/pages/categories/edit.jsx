import React, { useState } from "react"
import { Container } from "react-bootstrap"
import SBreadcrumb from "../../components/Breadcrumb"
import SAlert from "../../components/Alert"
import Form from "./form"
import { useNavigate, useParams } from "react-router-dom"
import { putData } from "../../utils/fetch"
import { setNotif } from "../../redux/notif/actions"
import { useDispatch } from "react-redux"

function CategoryEdit() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { categoryId } = useParams()
  const [form, setForm] = useState({
    name: "",
  })
  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const res = await putData(`/cms/categories/${categoryId}`, form)
      dispatch(
        setNotif(
          true,
          "success",
          `berhasil ubah kategori ${res.data.data.name}`
        )
      )
      setIsLoading(false)
      navigate("/categories")
    } catch (err) {
      setIsLoading(false)
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: err.response.data.msg,
      })
    }
  }

  return (
    <Container>
      <SBreadcrumb
        textSecound={"Categories"}
        urlSecound={"/categories"}
        textThird="Edit"
      />
      {alert.status && <SAlert type={alert.type} message={alert.message} />}
      <Form
        edit
        form={form}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  )
}

export default CategoryEdit
