import {fetchApprovedTimeSheetPending, fetchApprovedTimeSheetSuccess, fetchApprovedTimeSheetError} from '../../modules/actions';
import { GET_APPROVED } from '../api/api';
function fetchTimeSheet() {
    return dispatch => {
        dispatch(fetchApprovedTimeSheetPending());
        fetch(GET_APPROVED)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchApprovedTimeSheetSuccess(res.timesheet));
            return res.timesheets;
        })
        .catch(error => {
            dispatch(fetchApprovedTimeSheetError(error));
        })
    }
}

export default fetchTimeSheet;