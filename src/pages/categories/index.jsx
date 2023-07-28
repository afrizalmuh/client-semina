import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Spinner } from "react-bootstrap"
import SButton from "../../components/Button"
import SBreadcrumb from "../../components/Breadcrumb"
import SAlert from "../../components/Alert"
import Table from "../../components/TableWithAction"
import { useDispatch, useSelector } from "react-redux"
import { accessCategories } from "../../const/access"
import { fetchingCategories } from "../../redux/categories/actions"
import { setNotif } from "../../redux/notif/actions"
import Swal from "sweetalert2"
import { deleteData } from "../../utils/fetch"

function PageCategories() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const notif = useSelector((state) => state.notif)
  const categories = useSelector((state) => state.categories)
  const [access, setAccess] = useState({
    add: false,
    delete: false,
    edit: false,
  })

  const checkAccess = () => {
    let { role } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {}

    const access = { add: false, delete: false, edit: false }
    Object.keys(accessCategories).forEach(function (key, index) {
      if (accessCategories[key].indexOf(role) >= 0) {
        access[key] = true
      }
    })
    setAccess(access)
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`/cms/categories/${id}`)
        dispatch(
          setNotif(true, "success", `berhasil hapus data ${res.data.data.name}`)
        )
        dispatch(fetchingCategories())
      }
    })
  }

  useEffect(() => {
    checkAccess()
  }, [])
  useEffect(() => {
    dispatch(fetchingCategories())
  }, [dispatch])

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      {/* {console.log(access.add)} */}
      <Container className="mt-3">
        <SBreadcrumb textSecound="Categories" />
        {access.add && (
          <SButton
            className={"mb-3"}
            action={() => navigate("/categories/create")}
          >
            Tambah
          </SButton>
        )}
        {notif.status && (
          <SAlert type={notif.typeNotif} message={notif.message} />
        )}
        <Table
          status={categories.status}
          thead={["Nama", "Aksi"]}
          data={categories.data}
          tbody={["name"]}
          editUrl={access.edit ? `/categories/edit` : null}
          deleteAction={access.delete ? (id) => handleDelete(id) : null}
          withoutPagination
        />
      </Container>
    </>
  )
}

export default PageCategories
