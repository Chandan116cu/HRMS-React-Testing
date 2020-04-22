import { GET_TIMESHEET_DATA_PARTICULAR_RANGE } from '../../constants'
import data from '../../dummyData/timesheetData'
const initialState = {
  payload:data
  }
const daysTimesheet = (state = initialState, action) => {
  // console.log("Hello I am reducer")
  switch(action.type) {
      case GET_TIMESHEET_DATA_PARTICULAR_RANGE:
          return {
              ...state,
              payload: action.payload
          }

      default:
          // the dispatched action is not in this reducer, return the state unchanged
          return state;
  }
}
  export default daysTimesheet;