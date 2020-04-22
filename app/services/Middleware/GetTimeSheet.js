import {fetchTimeSheetPending, fetchTimeSheetSuccess, fetchTimeSheetError} from '../../modules/actions';
import { GET_TIMESHEET } from '../api/api';
function fetchTimeSheet() {
    return dispatch => {
        dispatch(fetchTimeSheetPending());
        fetch(GET_TIMESHEET)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchTimeSheetSuccess(res.timesheet));
            return res.timesheet;
        })
        .catch(error => {
            dispatch(fetchTimeSheetError(error));
        })
    }
}

export default fetchTimeSheet;