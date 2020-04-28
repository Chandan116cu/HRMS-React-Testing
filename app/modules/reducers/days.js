import { GET_TIMESHEET_DATA } from '../../constants'
import { ERROR_TIMESHEET_DATA } from '../../constants'
import { LOADING_TIMESHEET_DATA } from '../../constants'
// import Immutable from 'imm';
import data from '../../dummyData/timesheetData'
const initialState = {
  data: data,
  isLoading: false,
}
const days = (state = initialState, action) => {
  switch (action.type) {

    case LOADING_TIMESHEET_DATA:
      return {
        ...state,
        //   data: initialState.data,
        isLoading: true
      }


    case GET_TIMESHEET_DATA:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      }



    case ERROR_TIMESHEET_DATA:
      return {
        ...state,
        error: 'error',
        //   data: 'null',
        isLoading: false
      }




    default:
      // the dispatched action is not in this reducer, return the state unchanged
      return state;
  }
}
export default days;