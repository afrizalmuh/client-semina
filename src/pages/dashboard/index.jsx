import React from "react"
import { Container } from "react-bootstrap"
import SBreadcrumb from "../../components/Breadcrumb"

function PageDashboard() {
  return (
    <>
      <Container className="mt-3">
        <SBreadcrumb />
        <h1>dashboard</h1>
      </Container>
    </>
  )
}

export default PageDashboard
