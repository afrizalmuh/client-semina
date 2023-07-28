import React from "react"
import { Form } from "react-bootstrap"
import Sbutton from "../../components/Button"
import TextInputWithLabel from "../../components/TextInputWithLabel"

export default function CategoriesForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={"Masukkan nama kategori"}
        label="Name Kategori"
        name="name"
        value={form.name}
        type="text"
        onChange={handleChange}
      />
      <Sbutton
        className="mt-2"
        variant="primary"
        action={handleSubmit}
        loading={isLoading}
      >
        {edit ? "Ubah" : "Simpan"}
      </Sbutton>
    </Form>
  )
}
