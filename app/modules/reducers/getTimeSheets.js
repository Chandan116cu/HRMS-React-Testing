
import { TIMESHEET_SET_DATA } from '../../constants';

const initialState = {
    timeSheets: null
}

const getTimeSheets = (state = initialState, action) => {
    switch (action.type) {
        case TIMESHEET_SET_DATA:
            return {
                ...state,
                timeSheets: action.timeSheets
            }

        default:
            return state;
    }
};

export default getTimeSheets;


