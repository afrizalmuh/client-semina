import {
  START_FETCHING_CATEGORIES,
  SUCCESS_FETCHING_CATEGORIES,
  ERROR_FETCHING_CATEGORIES,
} from "./constants"
import { getData } from "../../utils/fetch"
import debounce from "debounce-promise"
import { clearNotif } from "../notif/actions"

let debouncedCategories = debounce(getData, 1000)
export const startFetchingCategories = () => {
  return {
    type: START_FETCHING_CATEGORIES,
  }
}

export const successFetchingCategories = ({ categories }) => {
  return {
    type: SUCCESS_FETCHING_CATEGORIES,
    categories,
  }
}

export const errorFetchingCategories = () => {
  return {
    type: ERROR_FETCHING_CATEGORIES,
  }
}

export const fetchingCategories = () => {
  return async (dispatch) => {
    dispatch(startFetchingCategories())
    try {
      setTimeout(() => {
        dispatch(clearNotif())
      }, 3000)
      let res = await debouncedCategories("/cms/categories")
      dispatch(successFetchingCategories({ categories: res.data.data }))
    } catch (err) {
      dispatch(errorFetchingCategories())
    }
  }
}
