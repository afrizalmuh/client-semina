import { Form } from "react-bootstrap"
import TextInputWithLabel from "../../components/TextInputWithLabel"
import SButton from "../../components/Button"

const SForm = ({ form, handleChange, isLoading, handleSubmit }) => {
  return (
    <Form>
      <TextInputWithLabel
        label="Email address"
        name="email"
        value={form.email}
        type="email"
        placeholder="Enter email"
        onChange={handleChange}
      />

      <TextInputWithLabel
        label="Password"
        placeholder="Password"
        name="password"
        value={form.password}
        type="password"
        onChange={handleChange}
      />

      <SButton
        className="mt-3"
        variant="primary"
        disabeld={isLoading}
        loading={isLoading}
        action={handleSubmit}
      >
        Submit
      </SButton>
    </Form>
  )
}

export default SForm
