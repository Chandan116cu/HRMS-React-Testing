import {fetchpendingTimeSheetPending, fetchpendingTimeSheetSuccess, fetchpendingTimeSheetError} from '../../modules/actions';
import { GET_PENDING } from '../api/api';
function fetchTimeSheet() {
    return dispatch => {
        dispatch(fetchpendingTimeSheetPending());
        fetch(GET_PENDING)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchpendingTimeSheetSuccess(res.timesheet));
            return res.timesheets;
        })
        .catch(error => {
            dispatch(fetchpendingTimeSheetError(error));
        })
    }
}

export default fetchTimeSheet;