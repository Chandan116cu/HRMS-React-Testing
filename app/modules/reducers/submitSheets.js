import { SUBMIT_TIMESHEET_DATA } from '../../constants'
import { SUBMIT_TIMESHEET_DATA_ERROR } from '../../constants'
import { SUBMIT_TIMESHEET_DATA_LOADING } from '../../constants'

const initialState = {
  payload:null,
  isLoading: false
  }
const submitTimesheet = (state = initialState, action) => {
  switch(action.type) {
      case SUBMIT_TIMESHEET_DATA:
          return {
              ...state,
              data: action.payload,
              isLoading:false
          }
          case SUBMIT_TIMESHEET_DATA_ERROR:
          return {
              ...state,
              error: 'error',
              isLoading:false
          }
          case SUBMIT_TIMESHEET_DATA_LOADING:
          return {
              ...state,
              isLoading: true
          }
         
      break;

      default:
          // the dispatched action is not in this reducer, return the state unchanged
          return state;
  }
}
  export default submitTimesheet;