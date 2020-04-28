import {combineReducers} from 'redux'
import getTimeSheets from './getTimeSheets'
import daysTimesheet from './fetchTimesheetDays'
import days from './days'
import submitTimesheet from './submitSheets'


const rootReducer = combineReducers({
   //TODO
   // timeSheets : daysTimesheet,
   // days : days,
   draftedSheets: submitTimesheet 
})

export default rootReducer;
