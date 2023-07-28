import React from "react"
export default function Table({ userProfile }) {
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>nama</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        {userProfile.map((user, idx) => {
          return (
            <tr key={idx}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
