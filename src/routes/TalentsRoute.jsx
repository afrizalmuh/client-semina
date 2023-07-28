import { Route, Routes } from "react-router-dom"

import Talents from "../pages/talents"
import TalentsCreate from "../pages/talents/create"
import TalentsEdit from "../pages/talents/edit"

export function TalentsRoute() {
  return (
    <Routes>
      <Route path="/" element={<Talents />} />
      <Route path="/create" element={<TalentsCreate />} />
      <Route path="/edit/:talentId" element={<TalentsEdit />} />
    </Routes>
  )
}
