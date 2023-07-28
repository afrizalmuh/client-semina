import React from "react"
import { Form } from "react-bootstrap"
import TextInput from "../TextInput"

const TextInputWithLabel = ({
  label,
  name,
  value,
  type,
  onChange,
  placeholder,
}) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <TextInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Form.Group>
  )
}

export default TextInputWithLabel
