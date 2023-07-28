import { CLEAR_NOTIF, SET_NOTIF } from "./constants"

export function setNotif(status, tyeNotif, message) {
  return {
    type: SET_NOTIF,
    status,
    tyeNotif,
    message,
  }
}

export function clearNotif() {
  return {
    type: CLEAR_NOTIF,
  }
}
