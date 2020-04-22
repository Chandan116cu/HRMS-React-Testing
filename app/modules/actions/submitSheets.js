
import { SUBMIT_TIMESHEET_DATA } from '../../constants'
import { SUBMIT_TIMESHEET_DATA_ERROR } from '../../constants'
import { SUBMIT_TIMESHEET_DATA_LOADING } from '../../constants'

export const success = (data) => {
  return {
      type: SUBMIT_TIMESHEET_DATA,
      payload: data
  }
}

export const error = () => {
    return {
        type: SUBMIT_TIMESHEET_DATA_ERROR,
        error: 'error'
    }
  }

  export const Loading = () => {
    return {
        type: SUBMIT_TIMESHEET_DATA_LOADING,
        isLoading: true
    }
  }