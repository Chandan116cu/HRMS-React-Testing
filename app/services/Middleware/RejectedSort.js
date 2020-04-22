import {fetchRejectedTimeSheetPending, fetchRejectedTimeSheetSuccess, fetchRejectedTimeSheetError} from '../../modules/actions';
import { GET_REJECTED } from '../api/api';
function fetchTimeSheet() {
    return dispatch => {
        dispatch(fetchRejectedTimeSheetPending());
        fetch(GET_REJECTED)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchRejectedTimeSheetSuccess(res.timesheet));
            return res.timesheets;
        })
        .catch(error => {
            dispatch(fetchRejectedTimeSheetError(error));
        })
    }
}

export default fetchTimeSheet;