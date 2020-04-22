
import { GET_TIMESHEET_DATA_PARTICULAR_RANGE } from '../../constants'
// import {ERROR_TIMESHEET_DATA_PARTICULAR_RANGE} from '../../constants'
// import {LOADING_TIMESHEET_DATA_PARTICULAR_RANGE} from '../../constants'

export const daysTimesheet = (data) => {
  return {
      type: GET_TIMESHEET_DATA_PARTICULAR_RANGE,
      payload: data
  }
}
// export const error = () => {
//   return {
//       type: ERROR_TIMESHEET_DATA_PARTICULAR_RANGE,
//       error: 'error'
//   }
// }

// export const Loading = () => {
//   return {
//       type: LOADING_TIMESHEET_DATA_PARTICULAR_RANGE,
//       isLoading: true
//   }
// }
