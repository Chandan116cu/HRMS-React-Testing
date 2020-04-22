import {fetchSubmittedTimeSheetPending, fetchSubmittedTimeSheetSuccess, fetchSubmittedTimeSheetError} from '../../modules/actions';
import { GET_SUBMITED } from '../api/api';
function fetchTimeSheet() {
    return dispatch => {
        dispatch(fetchSubmittedTimeSheetPending());
        fetch(GET_SUBMITED)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchSubmittedTimeSheetSuccess(res.timesheet));
            return res.timesheets;
        })
        .catch(error => {
            dispatch(fetchSubmittedTimeSheetError(error));
        })
    }
}

export default fetchTimeSheet;