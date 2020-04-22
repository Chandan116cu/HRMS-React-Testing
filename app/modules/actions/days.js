
import { GET_TIMESHEET_DATA } from '../../constants'
import { ERROR_TIMESHEET_DATA } from '../../constants'
import { LOADING_TIMESHEET_DATA } from '../../constants'

export const days = (data) => {
  return {
      type: GET_TIMESHEET_DATA,
      payload: data
  }
}
export const error = () => {
  return {
      type: ERROR_TIMESHEET_DATA,
      error: 'error',
      isLoading: false
  }
}

export const Loading = () => {
  return {
      type: LOADING_TIMESHEET_DATA,
      isLoading: true
      
  }
}