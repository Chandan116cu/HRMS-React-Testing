import {fetchPostTimeSheetPending, fetchPostTimeSheetSuccess, fetchPostTimeSheetError} from '../../modules/actions';
import { POST_TIMESHEET } from '../api/api';
function fetchTimeSheet() {
    return dispatch => {
        dispatch(fetchPostTimeSheetPending());
        fetch(POST_TIMESHEET)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchPostTimeSheetSuccess(res.timesheet));
            return res.timesheets;
        })
        .catch(error => {
            dispatch(fetchPostTimeSheetError(error));
        })
    }
}

export default fetchTimeSheet;