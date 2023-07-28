import axios from "axios"
import handleError from "./handleError"
import { config } from "../configs"

export const getData = async (url, params) => {
  try {
    const { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {}
    return await axios.get(`${config.api_host_dev}${url}`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  } catch (err) {
    handleError(err)
  }
}

export async function postData(url, payload, formData) {
  try {
    const { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {}
  return await axios.post(`${config.api_host_dev}${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": formData ? "multipart/form-data" : "application/json",
    },
  })
  } catch (err) {
    handleError(err)
  }
}

// export const postData = async (url, payload, formData) => {
//   const { token } = localStorage.getItem("auth")
//     ? JSON.parse(localStorage.getItem("auth"))
//     : {}
//   return await axios.post(`${config.api_host_dev}${url}`, payload, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": formData ? "multipart/form-data" : "application/json",
//     },
//   })
// }

export const putData = async (url, payload) => {
  const { token } = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {}
  return await axios.put(`${config.api_host_dev}${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const deleteData = async (url) => {
  try {
    const { token } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {}
    return await axios.delete(`${config.api_host_dev}${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  } catch (err) {}
}
