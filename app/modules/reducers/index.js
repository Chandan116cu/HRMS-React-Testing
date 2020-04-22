import {combineReducers} from 'redux'
import getTimeSheets from './getTimeSheets'
import daysTimesheet from './fetchTimesheetDays'
import days from './days'


const rootReducer = combineReducers({
   //TODO
   timeSheets : daysTimesheet,
   days : days
})

export default rootReducer;
